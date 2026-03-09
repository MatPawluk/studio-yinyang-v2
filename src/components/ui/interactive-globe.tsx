"use client";

import { cn } from "@/lib/utils";
import { useRef, useEffect, useCallback } from "react";
// @ts-ignore — pre-generated lat/lng land coordinates from dotted-map
import landData from "@/data/globeLandDots.json";

interface GlobeProps {
  className?: string;
  size?: number;
}

const WARSAW = { lat: 52.237, lng: 21.018, label: "Warszawa" };
const SHANGHAI = { lat: 31.230, lng: 121.474, label: "Szanghaj" };

function latLngToXYZ(lat: number, lng: number, radius: number): [number, number, number] {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}

function rotateY(x: number, y: number, z: number, a: number): [number, number, number] {
  return [x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a)];
}

function rotateX(x: number, y: number, z: number, a: number): [number, number, number] {
  return [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)];
}

function project(x: number, y: number, z: number, cx: number, cy: number, fov: number): [number, number] {
  const scale = fov / (fov + z);
  return [x * scale + cx, -y * scale + cy];
}

function greatCirclePoints(
  lat1: number, lng1: number, lat2: number, lng2: number,
  radius: number, segments: number, arcElevation: number
): [number, number, number][] {
  const points: [number, number, number][] = [];
  const [x1, y1, z1] = latLngToXYZ(lat1, lng1, radius);
  const [x2, y2, z2] = latLngToXYZ(lat2, lng2, radius);
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    let x = x1 + (x2 - x1) * t;
    let y = y1 + (y2 - y1) * t;
    let z = z1 + (z2 - z1) * t;
    const len = Math.sqrt(x * x + y * y + z * z);
    const elevation = 1 + arcElevation * 4 * t * (1 - t);
    x = (x / len) * radius * elevation;
    y = (y / len) * radius * elevation;
    z = (z / len) * radius * elevation;
    points.push([x, y, z]);
  }
  return points;
}

export function InteractiveGlobe({ className, size = 600 }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    
    // Only resize if needed to avoid constant clearing/recalculation
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      
      // Initialize Offscreen Canvas for static dots
      if (!offscreenCanvasRef.current) {
        offscreenCanvasRef.current = document.createElement("canvas");
      }
      const offCanvas = offscreenCanvasRef.current;
      offCanvas.width = canvas.width;
      offCanvas.height = canvas.height;
      const offCtx = offCanvas.getContext("2d");
      
      if (offCtx) {
        offCtx.scale(dpr, dpr);
        
        const cx = w / 2;
        const cy = h / 2;
        const radius = Math.min(w, h) * 0.25;
        const fov = 800;

        // Compute ry to horizontally center midpoint of Warsaw & Shanghai
        const [wx, , wz] = latLngToXYZ(WARSAW.lat, WARSAW.lng, 1);
        const [shx, , shz] = latLngToXYZ(SHANGHAI.lat, SHANGHAI.lng, 1);
        let mx = (wx + shx) / 2, mz = (wz + shz) / 2;
        const ml2 = Math.sqrt(mx * mx + mz * mz);
        mx /= ml2; mz /= ml2;
        const ry = Math.atan2(mx, -mz);
        const rx = -0.35; // Tilt for nice Europe/Asia view

        // ── ATMOSPHERE GLOW ──
        const atmoGrad = offCtx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.5);
        atmoGrad.addColorStop(0, "rgba(196, 255, 0, 0.15)");
        atmoGrad.addColorStop(0.3, "rgba(196, 255, 0, 0.05)");
        atmoGrad.addColorStop(0.6, "rgba(196, 255, 0, 0.01)");
        atmoGrad.addColorStop(1, "rgba(196, 255, 0, 0)");
        offCtx.fillStyle = atmoGrad;
        offCtx.beginPath();
        offCtx.arc(cx, cy, radius * 1.5, 0, Math.PI * 2);
        offCtx.fill();

        // ── ORGANIC "TENTACLE" LINES ──
        offCtx.strokeStyle = "rgba(196, 255, 0, 0.08)";
        offCtx.lineWidth = 1;
        for (let i = 0; i < 8; i++) {
          const angle = (Date.now() * 0.0005 + i * Math.PI * 0.25) % (Math.PI * 2);
          const shift = Math.sin(Date.now() * 0.001 + i) * 20;
          offCtx.beginPath();
          offCtx.moveTo(cx + Math.cos(angle) * radius * 0.8, cy + Math.sin(angle) * radius * 0.8);
          offCtx.bezierCurveTo(
            cx + Math.cos(angle + 0.2) * radius * 1.2 + shift, cy + Math.sin(angle + 0.2) * radius * 1.2,
            cx + Math.cos(angle - 0.2) * radius * 1.4, cy + Math.sin(angle - 0.2) * radius * 1.4 + shift,
            cx + Math.cos(angle) * radius * 1.8, cy + Math.sin(angle) * radius * 1.8
          );
          offCtx.stroke();
        }

        // ── GLOBE EDGE ──
        offCtx.beginPath();
        offCtx.arc(cx, cy, radius, 0, Math.PI * 2);
        offCtx.strokeStyle = "rgba(255, 255, 255, 0.06)";
        offCtx.lineWidth = 1;
        offCtx.stroke();

        // ── LAND DOTS (from dotted-map data) ──
        for (const [lat, lng] of landData as [number, number][]) {
          let [x, y, z] = latLngToXYZ(lat, lng, radius);
          [x, y, z] = rotateX(x, y, z, rx);
          [x, y, z] = rotateY(x, y, z, ry);
          if (z > 0) continue; // back-face cull
          const [sx, sy] = project(x, y, z, cx, cy, fov);
          const depth = 1 - (z + radius) / (2 * radius);
          const alpha = 0.12 + depth * 0.45;
          const dotSize = 0.6 + depth * 0.8;
          
          offCtx.beginPath();
          offCtx.arc(sx, sy, dotSize, 0, Math.PI * 2);
          offCtx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
          offCtx.fill();
        }
      }
    }

    // Reset transform to identity before scaling
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear entire physical canvas
    ctx.scale(dpr, dpr);

    // Draw cached static globe
    if (offscreenCanvasRef.current) {
      // The offscreen canvas is already sized with dpr applied to its dimensions
      // When we draw it onto our dpr-scaled ctx, we need to specify the logical bounds (w, h)
      ctx.drawImage(offscreenCanvasRef.current, 0, 0, w, h);
    }

    timeRef.current += 0.008;
    const time = timeRef.current;
    
    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) * 0.25;
    const fov = 800;

    // Compute ry to horizontally center midpoint of Warsaw & Shanghai
    const [wx, , wz] = latLngToXYZ(WARSAW.lat, WARSAW.lng, 1);
    const [shx, , shz] = latLngToXYZ(SHANGHAI.lat, SHANGHAI.lng, 1);
    let mx = (wx + shx) / 2, mz = (wz + shz) / 2;
    const ml2 = Math.sqrt(mx * mx + mz * mz);
    mx /= ml2; mz /= ml2;
    const ry = Math.atan2(mx, -mz);
    const rx = -0.35; // Moderate tilt for nice Europe/Asia view

    // ── GREAT CIRCLE ARC ──
    const arcPoints = greatCirclePoints(
      WARSAW.lat, WARSAW.lng, SHANGHAI.lat, SHANGHAI.lng,
      radius, 80, 0.08 // More fitted to Earth's shape (was 0.2)
    );
    const screenPoints: { sx: number; sy: number; z: number }[] = [];
    for (const [px, py, pz] of arcPoints) {
      let [x, y, z] = rotateX(px, py, pz, rx);
      [x, y, z] = rotateY(x, y, z, ry);
      const [sx, sy] = project(x, y, z, cx, cy, fov);
      screenPoints.push({ sx, sy, z });
    }

    // Draw arc path helper
    const drawArc = () => {
      let started = false;
      for (const pt of screenPoints) {
        if (!started) { ctx.moveTo(pt.sx, pt.sy); started = true; }
        else ctx.lineTo(pt.sx, pt.sy);
      }
    };

    // Outer glow
    ctx.beginPath(); drawArc();
    ctx.strokeStyle = "rgba(196, 255, 0, 0.06)";
    ctx.lineWidth = 14; ctx.lineCap = "round"; ctx.stroke();

    // Mid glow
    ctx.beginPath(); drawArc();
    ctx.strokeStyle = "rgba(196, 255, 0, 0.18)";
    ctx.lineWidth = 5; ctx.lineCap = "round"; ctx.stroke();

    // Core line
    ctx.beginPath(); drawArc();
    ctx.strokeStyle = "rgba(196, 255, 0, 0.9)";
    ctx.lineWidth = 1.5; ctx.lineCap = "round"; ctx.stroke();

    // ── TRAVELING PARTICLES (bidirectional: PL→CN and CN→PL) ──
    if (screenPoints.length > 2) {
      for (let p = 0; p < 2; p++) {
        // Slowed down particle speed for a calmer, premium look
        const baseT = p === 0 ? time * 0.08 : time * 0.08 + 0.5;
        let t = ((baseT % 1) + 1) % 1;
        // Particle 1 goes forward (Warsaw→Shanghai), particle 2 goes backward (Shanghai→Warsaw)
        if (p === 1) t = 1 - t;
        const exactIdx = t * (screenPoints.length - 1);
        const idx = Math.floor(exactIdx);
        const nextIdx = Math.min(idx + 1, screenPoints.length - 1);
        const blend = exactIdx - idx;
        
        const pt1 = screenPoints[idx];
        const pt2 = screenPoints[nextIdx];
        
        const pt = {
          sx: pt1.sx + (pt2.sx - pt1.sx) * blend,
          sy: pt1.sy + (pt2.sy - pt1.sy) * blend
        };

        const glow = ctx.createRadialGradient(pt.sx, pt.sy, 0, pt.sx, pt.sy, 14);
        glow.addColorStop(0, "rgba(196, 255, 0, 0.7)");
        glow.addColorStop(0.3, "rgba(196, 255, 0, 0.2)");
        glow.addColorStop(1, "rgba(196, 255, 0, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(pt.sx, pt.sy, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pt.sx, pt.sy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#c4ff00";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pt.sx, pt.sy, 1, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
    }

    // ── CITY MARKERS ──
    for (const city of [WARSAW, SHANGHAI]) {
      let [x, y, z] = latLngToXYZ(city.lat, city.lng, radius);
      [x, y, z] = rotateX(x, y, z, rx);
      [x, y, z] = rotateY(x, y, z, ry);
      if (z > radius * 0.9) continue;
      const [sx, sy] = project(x, y, z, cx, cy, fov);

      // Pulse
      const pulse = Math.sin(time * 3 + city.lat * 0.05) * 0.5 + 0.5;
      const pr = 8 + pulse * 12;
      const pg = ctx.createRadialGradient(sx, sy, 0, sx, sy, pr);
      pg.addColorStop(0, "rgba(196, 255, 0, 0.35)");
      pg.addColorStop(0.5, "rgba(196, 255, 0, 0.08)");
      pg.addColorStop(1, "rgba(196, 255, 0, 0)");
      ctx.fillStyle = pg;
      ctx.beginPath();
      ctx.arc(sx, sy, pr, 0, Math.PI * 2);
      ctx.fill();

      // Ring
      const p2 = Math.sin(time * 3 + city.lat * 0.05 + 1.5) * 0.5 + 0.5;
      ctx.beginPath();
      ctx.arc(sx, sy, 5 + p2 * 8, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(196, 255, 0, ${(0.12 + p2 * 0.1).toFixed(2)})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Core
      ctx.beginPath();
      ctx.arc(sx, sy, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#c4ff00";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();

      // Label
      const off = city === WARSAW ? { x: 16, y: -18 } : { x: 16, y: 18 };
      const lx = sx + off.x;
      const ly = sy + off.y;

      // Connector line
      ctx.beginPath();
      ctx.moveTo(sx + 5, sy + (off.y > 0 ? 3 : -3));
      ctx.lineTo(lx - 2, ly + (off.y > 0 ? -6 : 6));
      ctx.strokeStyle = "rgba(196, 255, 0, 0.25)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Pill
      ctx.font = "600 12px 'Inter', system-ui, sans-serif";
      const tw = ctx.measureText(city.label).width;
      const pw = tw + 14, ph = 22;
      const pillX = lx - 3, pillY = ly - ph / 2;
      const rr = 5;

      ctx.beginPath();
      ctx.moveTo(pillX + rr, pillY);
      ctx.lineTo(pillX + pw - rr, pillY);
      ctx.quadraticCurveTo(pillX + pw, pillY, pillX + pw, pillY + rr);
      ctx.lineTo(pillX + pw, pillY + ph - rr);
      ctx.quadraticCurveTo(pillX + pw, pillY + ph, pillX + pw - rr, pillY + ph);
      ctx.lineTo(pillX + rr, pillY + ph);
      ctx.quadraticCurveTo(pillX, pillY + ph, pillX, pillY + ph - rr);
      ctx.lineTo(pillX, pillY + rr);
      ctx.quadraticCurveTo(pillX, pillY, pillX + rr, pillY);
      ctx.closePath();

      ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      ctx.fill();
      ctx.strokeStyle = "rgba(196, 255, 0, 0.15)";
      ctx.lineWidth = 0.7;
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.fillText(city.label, pillX + 7, pillY + ph / 2 + 4);
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full", className)}
      style={{ width: size, height: size, touchAction: "none" }}
    />
  );
}

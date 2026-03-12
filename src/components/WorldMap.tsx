import { useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

export function WorldMap() {
  const { svgUrl, startPct, endPct } = useMemo(() => {
    const mapObj = new DottedMap({ height: 100, grid: "diagonal" });
    
    // Add pins to extract their exact SVG coordinates later
    mapObj.addPin({ lat: 52.2297, lng: 21.0122, svgOptions: { color: "#c4ff00", radius: 0.5 } }); // Warsaw
    mapObj.addPin({ lat: 31.2304, lng: 121.4737, svgOptions: { color: "#c4ff00", radius: 0.5 } }); // Shanghai

    const points = mapObj.getPoints();
    const pins = points.filter(p => p.svgOptions?.color === "#c4ff00");
    
    // Safe bounds calculation using reduce (avoids stack overflow with spread)
    const minX = points.reduce((min, p) => p.x < min ? p.x : min, Infinity);
    const maxX = points.reduce((max, p) => p.x > max ? p.x : max, -Infinity);
    const minY = points.reduce((min, p) => p.y < min ? p.y : min, Infinity);
    const maxY = points.reduce((max, p) => p.y > max ? p.y : max, -Infinity);

    const toPct = (x: number, y: number) => ({
      x: ((x - minX) / (maxX - minX)) * 800, // Scale to our 800x400 viewBox
      y: ((y - minY) / (maxY - minY)) * 400,
    });

    const svg = mapObj.getSVG({
      radius: 0.22,
      color: "#FFFF7F40",
      shape: "circle",
      backgroundColor: "transparent",
    });

    // Create a Blob URL for the SVG to avoid huge Data URIs in the DOM
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    return {
      svgUrl: url,
      startPct: pins[0] ? toPct(pins[0].x, pins[0].y) : { x: 410, y: 110 },
      endPct: pins[1] ? toPct(pins[1].x, pins[1].y) : { x: 670, y: 160 },
    };
  }, []);

  // Cleanup Blob URL on unmount
  useEffect(() => {
    return () => URL.revokeObjectURL(svgUrl);
  }, [svgUrl]);

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const curvePath = createCurvedPath(startPct, endPct);

  return (
    <div 
      className="w-full aspect-[2/1] rounded-lg relative font-sans overflow-hidden bg-transparent"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <img
        src={svgUrl}
        className="h-full w-full pointer-events-none select-none object-fill opacity-80"
        alt="world map"
        draggable={false}
      />
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow">
            <feMorphology operator="dilate" radius="0.5" />
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c4ff00" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#c4ff00" stopOpacity="1" />
            <stop offset="100%" stopColor="#c4ff00" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <motion.path
          d={curvePath}
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ 
            pathLength: [0, 1, 0, 1, 0],
            pathOffset: [0, 0, 1, 0, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.circle
          r="4"
          fill="#c4ff00"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: ["0%", "100%", "100%", "0%", "0%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            offsetPath: `path('${curvePath}')`,
          } as React.CSSProperties}
        />

        {[startPct, endPct].map((point, idx) => (
          <g key={idx}>
            <circle cx={point.x} cy={point.y} r="4" fill="#c4ff00" filter="url(#glow)" />
            <g transform={`translate(${point.x}, ${point.y - 25})`}>
              <rect
                x="-40"
                y="-15"
                width="80"
                height="22"
                rx="4"
                fill="#0B0B0C"
                fillOpacity="0.95"
                stroke="#374151"
                strokeWidth="0.5"
              />
              <text
                textAnchor="middle"
                dy="0"
                className="text-[10px] font-medium fill-white"
                style={{ fontFamily: 'sans-serif' }}
              >
                {idx === 0 ? "Warszawa" : "Shanghai"}
              </text>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}

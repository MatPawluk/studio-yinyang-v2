import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

export function WorldMap() {
  const svgRef = useRef<SVGSVGElement>(null);

  const { svgMap, startPct, endPct } = useMemo(() => {
    const mapObj = new DottedMap({ height: 100, grid: "diagonal" });
    
    // Add pins to extract their exact SVG coordinates later
    mapObj.addPin({ lat: 52.2297, lng: 21.0122, svgOptions: { color: "#c4ff00", radius: 0.5 } }); // Warsaw
    mapObj.addPin({ lat: 31.2304, lng: 121.4737, svgOptions: { color: "#c4ff00", radius: 0.5 } }); // Shanghai

    const points = mapObj.getPoints();
    const pins = points.filter(p => p.svgOptions?.color === "#c4ff00");
    
    // Determine bounds
    const allX = points.map(p => p.x);
    const allY = points.map(p => p.y);
    const minX = Math.min(...allX);
    const maxX = Math.max(...allX);
    const minY = Math.min(...allY);
    const maxY = Math.max(...allY);

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

    return {
      svgMap: svg,
      startPct: pins[0] ? toPct(pins[0].x, pins[0].y) : { x: 410, y: 110 },
      endPct: pins[1] ? toPct(pins[1].x, pins[1].y) : { x: 670, y: 160 },
    };
  }, []);

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
    <div className="w-full aspect-[2/1] rounded-lg relative font-sans overflow-hidden bg-transparent">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none object-fill opacity-80"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
        preserveAspectRatio="none"
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
            <foreignObject
              x={point.x - 50}
              y={point.y - 35}
              width="100"
              height="30"
            >
              <div className="flex items-center justify-center h-full">
                <span className="text-sm font-medium px-2 py-0.5 rounded-md bg-gray-900/95 text-white border border-gray-700 shadow-sm">
                  {idx === 0 ? "Warszawa" : "Shanghai"}
                </span>
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>
    </div>
  );
}

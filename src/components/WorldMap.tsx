import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

export function WorldMap() {
  const svgRef = useRef<SVGSVGElement>(null);

  const map = useMemo(
    () => new DottedMap({ height: 100, grid: "diagonal" }),
    []
  );

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: "#FFFF7F40",
        shape: "circle",
        backgroundColor: "transparent",
      }),
    [map]
  );

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const startPoint = projectPoint(52.2297, 21.0122);
  const endPoint = projectPoint(31.2304, 121.4737);
  const curvePath = createCurvedPath(startPoint, endPoint);

  return (
    <div className="w-full aspect-[2/1] rounded-lg relative font-sans overflow-hidden">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none object-cover"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
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
        </defs>

        <motion.path
          d={curvePath}
          fill="none"
          stroke="#c4ff00"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <motion.circle
          r="4"
          fill="#c4ff00"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            offsetPath: `path('${curvePath}')`,
          } as React.CSSProperties}
        />

        {[startPoint, endPoint].map((point, idx) => (
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

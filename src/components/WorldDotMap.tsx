import { useMemo } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import DottedMap from 'dotted-map/without-countries';
import worldMapData from '@/data/worldMapData.json';

interface WorldDotMapProps {
  className?: string;
}

const WARSAW_LAT = 52.237049;
const WARSAW_LNG = 21.017532;
const BEIJING_LAT = 39.9042;
const BEIJING_LNG = 116.4074;

export const WorldDotMap = ({ className = '' }: WorldDotMapProps) => {
  const { svgContent, warsawPct, beijingPct } = useMemo(() => {
    const map = new DottedMap({ map: JSON.parse(JSON.stringify(worldMapData)) });

    // Add pins with distinct color
    map.addPin({ lat: WARSAW_LAT, lng: WARSAW_LNG, svgOptions: { color: '#c4ff00', radius: 0.5 } });
    map.addPin({ lat: BEIJING_LAT, lng: BEIJING_LNG, svgOptions: { color: '#c4ff00', radius: 0.5 } });

    // Get all points to determine the SVG coordinate space
    const points: { x: number; y: number; svgOptions?: { color?: string } }[] = map.getPoints();

    // Find the two lime-colored pin points
    const pins = points.filter(p => p.svgOptions?.color === '#c4ff00');
    const warsawPoint = pins[0];
    const beijingPoint = pins[1];

    // Determine bounds of the entire map
    const allX = points.map(p => p.x);
    const allY = points.map(p => p.y);
    const minX = Math.min(...allX);
    const maxX = Math.max(...allX);
    const minY = Math.min(...allY);
    const maxY = Math.max(...allY);

    // Convert to percentage within the SVG bounds
    const toPct = (x: number, y: number) => ({
      x: ((x - minX) / (maxX - minX)) * 100,
      y: ((y - minY) / (maxY - minY)) * 100,
    });

    const svg = map.getSVG({
      radius: 0.27,
      color: '#374151',
      shape: 'circle',
      backgroundColor: 'transparent',
    });

    return {
      svgContent: svg,
      warsawPct: warsawPoint ? toPct(warsawPoint.x, warsawPoint.y) : { x: 51, y: 26 },
      beijingPct: beijingPoint ? toPct(beijingPoint.x, beijingPoint.y) : { x: 72, y: 36 },
    };
  }, []);

  // Arc control point - arc's apex goes north (up) of both cities
  const arcQx = (warsawPct.x + beijingPct.x) / 2;
  const arcQy = Math.min(warsawPct.y, beijingPct.y) - 14;
  const arcPath = `M ${warsawPct.x} ${warsawPct.y} Q ${arcQx} ${arcQy} ${beijingPct.x} ${beijingPct.y}`;

  return (
    <div className={`relative w-full ${className}`} style={{ userSelect: 'none' }}>
      {/* Dot map */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`}
        alt="World Map"
        className="w-full h-auto block"
        draggable={false}
      />

      {/* Overlay SVG — uses same 0-100x0-100 coordinate space as our toPct() */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Arc */}
        <motion.path
          d={arcPath}
          fill="none"
          stroke="#c4ff00"
          strokeWidth={0.4}
          strokeDasharray="1.8 1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2.5, delay: 0.5, ease: 'easeInOut' }}
        />

        {/* Animated plane dot along arc */}
        <motion.circle
          r={0.7}
          fill="#c4ff00"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0], offsetDistance: ['0%', '50%', '100%', '100%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 2 }}
          style={{ offsetPath: `path('${arcPath}')` } as React.CSSProperties}
        />

        {/* Warsaw: outer ping */}
        <motion.circle
          cx={warsawPct.x} cy={warsawPct.y} r={1.6}
          fill="none" stroke="#c4ff00" strokeWidth={0.35}
          animate={{ scale: [1, 2.5], opacity: [0.7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          style={{ transformOrigin: `${warsawPct.x}px ${warsawPct.y}px` }}
        />
        {/* Warsaw: inner dot */}
        <circle cx={warsawPct.x} cy={warsawPct.y} r={0.9} fill="#c4ff00" opacity={1} />

        {/* Beijing: outer ping */}
        <motion.circle
          cx={beijingPct.x} cy={beijingPct.y} r={1.6}
          fill="none" stroke="#c4ff00" strokeWidth={0.35}
          animate={{ scale: [1, 2.5], opacity: [0.7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 1 }}
          style={{ transformOrigin: `${beijingPct.x}px ${beijingPct.y}px` }}
        />
        {/* Beijing: inner dot */}
        <circle cx={beijingPct.x} cy={beijingPct.y} r={0.9} fill="#c4ff00" opacity={1} />
      </svg>

      {/* HTML labels — positioned using same % as toPct */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: `${warsawPct.x}%`,
          top: `${warsawPct.y + 3.5}%`,
          transform: 'translateX(-50%)',
        }}
      >
        <div className="bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-700 whitespace-nowrap">
          <p className="text-white text-xs font-semibold">Warszawa</p>
          <p className="text-gray-400 text-[10px]">Polska</p>
        </div>
      </div>

      <div
        className="absolute pointer-events-none"
        style={{
          left: `${beijingPct.x}%`,
          top: `${beijingPct.y + 3.5}%`,
          transform: 'translateX(-50%)',
        }}
      >
        <div className="bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-700 whitespace-nowrap">
          <p className="text-white text-xs font-semibold">Pekin</p>
          <p className="text-gray-400 text-[10px]">Chiny</p>
        </div>
      </div>
    </div>
  );
};
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line, Html } from '@react-three/drei';
import * as THREE from 'three';

// Constants calculated once outside the component
const RADIUS = 2;
const latLonToVector3 = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

const WARSAW_POS = latLonToVector3(52.23, 21.01, RADIUS);
const SHANGHAI_POS = latLonToVector3(31.23, 121.47, RADIUS);

const GlobeModel = () => {
  const globeRef = useRef<THREE.Group>(null);
  const warsawRef = useRef<THREE.Mesh>(null);
  const shanghaiRef = useRef<THREE.Mesh>(null);
  
  // Create arc curve between points
  const curvePoints = useMemo(() => {
    const midPoint = new THREE.Vector3()
      .addVectors(WARSAW_POS, SHANGHAI_POS)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(RADIUS * 1.3);
    
    const curve = new THREE.QuadraticBezierCurve3(WARSAW_POS, midPoint, SHANGHAI_POS);
    return curve.getPoints(50).map(p => [p.x, p.y, p.z] as [number, number, number]);
  }, []);
  
  useFrame((state) => {
    if (globeRef.current) globeRef.current.rotation.y += 0.001;
    
    // Scale animation remains here but we decouple lights to prevent scaling them
    const scaleFactor = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    if (warsawRef.current) warsawRef.current.scale.setScalar(scaleFactor);
    if (shanghaiRef.current) shanghaiRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + 1) * 0.2);
  });
  
  return (
    <group ref={globeRef}>
      {/* Globe - Optimized segments from 64 to 32 */}
      <Sphere args={[RADIUS, 32, 32]}>
        <meshStandardMaterial color="#1a1a2e" metalness={0.4} roughness={0.7} />
      </Sphere>
      
      {/* Grid lines */}
      <Sphere args={[RADIUS + 0.02, 32, 32]}>
        <meshBasicMaterial color="#c4ff00" wireframe transparent opacity={0.08} />
      </Sphere>
      
      {/* Warsaw marker & light */}
      <group position={WARSAW_POS}>
        <mesh ref={warsawRef}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#c4ff00" />
        </mesh>
        <pointLight color="#c4ff00" intensity={2} distance={1} />
        <Html center distanceFactor={8}>
          <div className="bg-gray-900/95 px-2 py-1 rounded border border-lime/40 text-lime text-xs font-medium whitespace-nowrap shadow-lg">
            Warszawa
          </div>
        </Html>
      </group>
      
      {/* Shanghai marker & light */}
      <group position={SHANGHAI_POS}>
        <mesh ref={shanghaiRef}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#c4ff00" />
        </mesh>
        <pointLight color="#c4ff00" intensity={2} distance={1} />
        <Html center distanceFactor={8}>
          <div className="bg-gray-900/95 px-2 py-1 rounded border border-lime/40 text-lime text-xs font-medium whitespace-nowrap shadow-lg">
            Shanghai
          </div>
        </Html>
      </group>
      
      <Line points={curvePoints} color="#c4ff00" lineWidth={3} transparent opacity={0.8} />
    </group>
  );
};

export const Globe3D = () => {
  return (
    <div className="relative w-full h-[600px] max-w-4xl mx-auto">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 40 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <GlobeModel />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};
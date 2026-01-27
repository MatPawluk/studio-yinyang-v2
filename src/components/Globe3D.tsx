import { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

// Warsaw coordinates (lat: 52.23, lon: 21.01)
// Shanghai coordinates (lat: 31.23, lon: 121.47)

const latLonToVector3 = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
};

const GlobeModel = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const warsawRef = useRef<THREE.Mesh>(null);
  const shanghaiRef = useRef<THREE.Mesh>(null);
  
  const radius = 2;
  const warsawPos = latLonToVector3(52.23, 21.01, radius);
  const shanghaiPos = latLonToVector3(31.23, 121.47, radius);
  
  // Create curve between points
  const curvePoints = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      warsawPos,
      new THREE.Vector3(
        (warsawPos.x + shanghaiPos.x) / 2,
        (warsawPos.y + shanghaiPos.y) / 2 + 1.5,
        (warsawPos.z + shanghaiPos.z) / 2
      ),
      shanghaiPos
    );
    return curve.getPoints(50).map(p => [p.x, p.y, p.z] as [number, number, number]);
  }, []);
  
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
    if (warsawRef.current) {
      warsawRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.2);
    }
    if (shanghaiRef.current) {
      shanghaiRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + 1) * 0.2);
    }
  });
  
  return (
    <group>
      {/* Globe */}
      <mesh ref={globeRef}>
        <Sphere args={[radius, 64, 64]}>
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.4}
            roughness={0.7}
            wireframe={false}
          />
        </Sphere>
        
        {/* Grid lines on globe */}
        <Sphere args={[radius + 0.01, 32, 32]}>
          <meshBasicMaterial
            color="#c4ff00"
            wireframe={true}
            transparent
            opacity={0.1}
          />
        </Sphere>
      </mesh>
      
      {/* Warsaw marker */}
      <mesh ref={warsawRef} position={warsawPos}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#c4ff00" />
        <pointLight color="#c4ff00" intensity={1} distance={0.5} />
      </mesh>
      
      {/* Shanghai marker */}
      <mesh ref={shanghaiRef} position={shanghaiPos}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#c4ff00" />
        <pointLight color="#c4ff00" intensity={1} distance={0.5} />
      </mesh>
      
      {/* Connection line using drei Line */}
      <Line
        points={curvePoints}
        color="#c4ff00"
        lineWidth={2}
        transparent
        opacity={0.6}
      />
    </group>
  );
};

export const Globe3D = () => {
  return (
    <div className="relative w-full h-[500px] max-w-3xl mx-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <GlobeModel />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      
      {/* Labels */}
      <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 bg-gray-900/90 px-3 py-1 rounded-lg border border-lime/30">
        <span className="text-lime text-sm font-medium">Warszawa</span>
      </div>
      <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 bg-gray-900/90 px-3 py-1 rounded-lg border border-lime/30">
        <span className="text-lime text-sm font-medium">Shanghai</span>
      </div>
    </div>
  );
};

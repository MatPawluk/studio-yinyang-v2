import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float, Stage, PresentationControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2.5} />;
}

export function YinYangLogo3D() {
  const modelUrl = "/models/yin-yang.glb";

  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage intensity={0.5} environment="city" adjustCamera={false} shadows={false}>
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0.3, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
            >
              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Model url={modelUrl} />
              </Float>
            </PresentationControls>
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
}

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <ambientLight intensity={0.5} />

      <directionalLight position={[0, 0, 0.05]} />

      <mesh scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  // Don't create WebGL canvases on mobile devices.
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  // Mobile fallback
  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={icon}
          alt="technology"
          className="w-16 h-16 object-contain"
        />
      </div>
    );
  }

  // Desktop 3D version
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1]}
      gl={{
        antialias: false,
        powerPreference: "low-power",
        preserveDrawingBuffer: false,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
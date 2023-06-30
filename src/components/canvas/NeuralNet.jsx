import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Neural_Network = ({IsMobile}) => {
  const nnetwork = useGLTF("./neuronal_cell_environment/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive 
      object={nnetwork.scene}
      scale={IsMobile ? 0.50 : 0.95}/>
    </mesh>
  )
  }
  const Neural_NetworkCanvas = () => {
    const [IsMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 500px)');
      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event) =>{
        setIsMobile(event.matches);
      }
      
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      }
    }, [])
    
    return (
      <Canvas
      frameloop="demand"
      shadows
      camera={{position:[6.5, 35, 8], zoom:30.5, fov:25 }}
      gl={{ preserveDrawingBuffer:true}}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls  
           enableZoom={false}
           
           maxPolarAngle={Math.PI/2}
           minPolarAngle={Math.PI/2}
           />
        <Neural_Network IsMobile={IsMobile}/>
        </Suspense>
      </Canvas>
    )
  }
  export default Neural_NetworkCanvas


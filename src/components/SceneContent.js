// import { createRoot } from 'react-dom/client';
import React, { useRef } from 'react'
// import React, { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Scene } from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from "@react-three/drei";
// import beduerfnisSpace from '../3dFiles/beduerfnis_space.gltf';
import beduerfnisSpace from '../3dFiles/beduerfnis_space_2.0.glb'

// import { useGLTF } from "@react-three/drei"

const deg2rad = degrees => degrees * (Math.PI / 180);

export default function SceneContent(){
  return(
    <>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
        <OrbitControls />
        <Room />
        <Grundriss />
    </>
    
  )
}

function Room(){
  const gltf = useLoader(
    GLTFLoader,
    beduerfnisSpace,
    loader => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      loader.setDRACOLoader(dracoLoader);
    }
  );

  return (
    <>
      <primitive object={gltf.scene} scale={0.5} />
    </>
  );
};


function Grundriss(){
  const mesh = useRef()
  return (
    <mesh
      // {...props}
      ref={mesh}
      // rotateY={deg2rad(90)}
      rotateZ={deg2rad(90)}
      // scale={1}
      // onClick={(event) => setActive(!active)}
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
      >
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}
// import { createRoot } from 'react-dom/client';
import React, { useRef } from 'react'
import * as THREE from 'three'
// import React, { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Scene } from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from "@react-three/drei";
// import beduerfnisSpace from '../3dFiles/beduerfnis_space.gltf';
import beduerfnisSpace from '../3dFiles/beduerfnis_space_3.0.glb'
import img from '../img/grundriss_square.png'
// import img from '../img/grundriss-svg.svg'

// import { useGLTF } from "@react-three/drei"

const deg2rad = degrees => degrees * (Math.PI / 180);

export default function SceneContent(){
  return(
    <>
        <ambientLight />
        {/* <pointLight position={[10, 10, 10]} /> */}
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
  gltf.scene.traverse( function( object ) {
    if ( object.isMesh ) {
        object.material.color.set( 0x000000 );
        // object.material.color.set( 0xffffff );
        object.material.transparent = true;
        object.material.opacity = 0.5;
        // object.material.wireframe = true;
    }
  })

  return (
    <mesh>
      <primitive object={gltf.scene} scale={0.5}  />
    </mesh>
  );
};


function Grundriss(){
  const mesh = useRef()
  const texture = useLoader(THREE.TextureLoader, img)

  console.log("Grundriss loaded")
  return (
    <mesh
      // {...props}
      ref={mesh}
      // rotateY={deg2rad(90)}
      rotation-x={deg2rad(-90)}
      scale={5}
      // onClick={(event) => setActive(!active)}
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
      >
      <planeGeometry args={[1, 1]} />
       
      <meshBasicMaterial
        color={'white'} 
        // emissiveMap={texture}
        // emissive={"white"}
        // emissiveIntensity={1} 
        // attach="material" 
        toneMapped={false}
        map={texture} 
        />
      {/* <meshStandardMaterial color={'white'} attach="material" map={texture}  reflectivity={0}/> */}
    </mesh>
  )
}
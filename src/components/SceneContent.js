// import { createRoot } from 'react-dom/client';
import React from 'react'
// import React, { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Scene } from 'three';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import beduerfnisSpace from '../3dFiles/beduerfnis_space.gltf'

// import { useGLTF } from "@react-three/drei"


export default function SceneContent(){
  return(
    <>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
        <OrbitControls />
        <Room />
    </>
    
  )
}

function Room(){
  // const gltf = useLoader(GLTFLoader, "../3dFiles/beduerfnis_space.gltf");
  const gltf = useLoader(GLTFLoader, beduerfnisSpace);
  return (
    <>
      <primitive object={gltf.scene} scale={0.5} />
    </>
  );
};

// function Box(props) {
//     // This reference will give us direct access to the mesh
//     const mesh = useRef()
//     // Set up state for the hovered and active state
//     const [hovered, setHover] = useState(false)
//     const [active, setActive] = useState(false)
//     // Subscribe this component to the render-loop, rotate the mesh every frame
//     useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
//     // Return view, these are regular three.js elements expressed in JSX
//     return (
//       <mesh
//         {...props}
//         ref={mesh}
//         scale={active ? 1.5 : 1}
//         onClick={(event) => setActive(!active)}
//         onPointerOver={(event) => setHover(true)}
//         onPointerOut={(event) => setHover(false)}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//       </mesh>
//     )
//   }
  


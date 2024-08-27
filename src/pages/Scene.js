// src/Scene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Box } from '@mui/material';
import  Desk  from './data/3d_image/Desk.glb'
import  Chair from './data/3d_image/Chair.glb'
import Laptop from './data/3d_image/Laptop.glb'
// Component for loading and displaying a 3D model
const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
};

const Scene = () => {
  return (
    <Box>
      <Canvas style={{ height: '500px', width: '100%' }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        
        {/* Place your models here */}
        {/* <Model path="./data/3d_images/" position={[0, 0, 0]} /> */}
        {/* Add other objects as needed */}

      </Canvas>
    </Box>
  );
};

export default Scene;

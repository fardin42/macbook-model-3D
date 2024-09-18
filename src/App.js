import React from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';

const App = () => {
  return (
    <>
    <div className="w-full h-screen ">
      <div className="absolute flex flex-col text-white items-center top-32 left-1/2 -translate-x-1/2  ">
        <h3 className='text-7xl tracking-tighter  font-[700]'>macbook pro.</h3>
      <h5>Oh so pro !</h5>
      <p className='text-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis similique ea obcaecati facilis?</p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
     
        <Environment files={[
          'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr',
        ]} />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
      </div>
    </>
  )
}

export default App

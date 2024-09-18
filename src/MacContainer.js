import React from 'react'
import mac from './media/mac.glb';
import red from './media/red.jpg'
import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';

const MacContainer = () => {
    let model = useGLTF(mac)
    let tex = useTexture(red);
    let meshes = {};
    model.scene.traverse(e =>{
       
            meshes[e.name] = e;

 
    })
    console.log(meshes.screen);
    
 meshes.screen.rotation.x =THREE.MathUtils.degToRad(180);
 meshes.matte.material.map = tex;
 meshes.matte.material.emissiveIntensity = 0;
 meshes.matte.material.metalness = 0;
 meshes.matte.material.roughness = 1;
 let data = useScroll();
            useFrame((state, delta)=>{
              meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - (data.offset * 90));
                
            })
  return (

  <group position={[0,-13,20]}>
     <primitive object={model.scene}/>
  </group>
  )
}

export default MacContainer
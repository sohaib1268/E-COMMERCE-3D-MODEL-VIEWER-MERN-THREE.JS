import React from 'react'
import { useEffect } from 'react';
import * as THREE from 'three';
import {GLTFLoader} from  'three/examples/jsm/loaders/GLTFLoader.js'
import SceneInit from './lib/SceneInit';

export default function Mi10TModel() {
    
    useEffect(() => {
        
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();
    
        let loadedModel;
        const glftLoader = new GLTFLoader();
        glftLoader.load('./assets/Mi10TModel/scene.gltf', (gltfScene) => {
          loadedModel = gltfScene;
          
    
          gltfScene.scene.rotation.y = 1;
          gltfScene.scene.position.y = 3;
          gltfScene.scene.scale.set(400, 400, 400);
          test.scene.add(gltfScene.scene);
        });
    
        const animate = () => {
          if (loadedModel) {
            loadedModel.scene.rotation.x += 0.01;
            loadedModel.scene.rotation.y += 0.01;
            loadedModel.scene.rotation.z += 0.01;
          }
          //requestAnimationFrame(animate);
        };

        animate();
      }, []);
    
      return (
        <div>
          <canvas id="myThreeJsCanvas" />
        </div>
      );
}

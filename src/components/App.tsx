import { OrbitControls, shaderMaterial } from "@react-three/drei"
import { Canvas, extend } from "@react-three/fiber"
import React from "react"
import fragmentShader from "../shaders/fragment.glsl"
import vertexShader from "../shaders/vertex.glsl"
import * as THREE from "three"

const FooShaderMaterial = shaderMaterial(
  { u_color: new THREE.Color(0.0, 0.0, 1.0) },
  vertexShader,
  fragmentShader
)

extend({ FooShaderMaterial })

const Main = () => {
  return (
    <mesh>
      <boxBufferGeometry />
      <fooShaderMaterial />
    </mesh>
  )
}

const App = () => {
  return (
    <div className="absolute w-full h-full bg-blue-200">
      <Canvas>
        <Main />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App

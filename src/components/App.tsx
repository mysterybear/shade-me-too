import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"

const Main = () => {
  return (
    <mesh>
      <boxBufferGeometry />
      <meshBasicMaterial color="tomato" />
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

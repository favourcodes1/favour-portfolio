import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />

        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial
            metalness={0.9}
            roughness={0.1}
            color="#6366f1"
          />
        </Sphere>

        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  )
}
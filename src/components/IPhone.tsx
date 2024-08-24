import { useGLTF } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

interface IPhoneProps {
  item: {
    img: string;
    color: string[];
  };
  size: string;
  scale: Vector3;
}

export function IPhone(props: IPhoneProps) {
  const { nodes, materials } = useGLTF("/models/scene.glb");

  useEffect(() => {
    Object.entries(materials).map((material) => {
      if (
        material[0] !== "zFdeDaGNRwzccye" &&
        material[0] !== "ujsvqBWRMnqdwPx" &&
        material[0] !== "hUlRcbieVuIiOXG" &&
        material[0] !== "jlzuBkUzuJqgiAK" &&
        material[0] !== "xNrofRCqOXXHVZt"
      ) {
        (material[1] as THREE.MeshStandardMaterial).color = new THREE.Color(
          props.item.color[0],
        );
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props.item]);

  return (
    <group {...props} dispose={null}>
      {Object.entries(nodes).map(([nodeName, node]) => (
        <mesh
          key={nodeName}
          castShadow
          receiveShadow
          geometry={(node as THREE.Mesh).geometry}
          material={(node as THREE.Mesh).material}
          scale={0.01}
        />
      ))}
    </group>
  );
}

useGLTF.preload("/models/scene.glb");

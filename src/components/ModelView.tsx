import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";
import { IPhone } from "./IPhone";
import Lights from "./Lights";
import { LoaderModel } from "./LoaderModel";

export const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}: {
  index: number;
  groupRef: React.MutableRefObject<THREE.Group>;
  gsapType: string;
  controlRef: any;
  setRotationState: (state: number) => void;
  item: {
    img: string;
    color: string[];
  };
  size: string;
}) => {
  return (
    <>
      <View
        index={index}
        id={gsapType}
        className={`absolute size-full ${index === 2 ? "-right-full" : ""}`}
      >
        <ambientLight intensity={0.5} />

        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Lights />

        <OrbitControls
          ref={controlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        />

        <group
          ref={groupRef}
          name={`${index === 1} ? 'small' : 'large'`}
          position={[0, 0, 0]}
        >
          <Suspense fallback={<LoaderModel />}>
            <IPhone
              item={item}
              scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
              size={size}
            />
          </Suspense>
        </group>
      </View>
    </>
  );
};

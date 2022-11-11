import * as THREE from 'three';
import { useRef } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';

const handlePointerDown = e => {
    e.object.active = true;
    if (window.activeMesh) {
        scaleDown(window.activeMesh);
        window.activeMesh.active = false;
    }
    window.activeMesh = e.object;
}
const handlePointerEnter = e => {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
}
const handlePointerLeave = e => {
    if (!e.object.active) {
        e.object.scale.x = 1;
        e.object.scale.y = 1;
        e.object.scale.z = 1;
    }
}
const scaleDown = (object) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
}

const Box = (props) => {
    const ref = useRef(null);
    const texture = useLoader(THREE.TextureLoader, `${process.env.PUBLIC_URL}/img/wood.jpg`)

    useFrame(() => {
        ref.current.rotation.x += 0.02;
        ref.current.rotation.y += 0.02;
    });
    return (
        <mesh ref={ref} {...props} castShadow receiveShadow onPointerDown={handlePointerDown} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave} >
            <boxBufferGeometry />
            <meshPhysicalMaterial map={texture} />
        </mesh>
    )
}

export default Box;
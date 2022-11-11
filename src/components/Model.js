import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = (props) => {
    const model = useLoader(GLTFLoader, props.path);
    return <primitive object={model.scene} scale={new Array(3).fill(30)} position={[0, -2, 0]} />
}

export default Model;
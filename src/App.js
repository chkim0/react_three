import './scss/style.scss';
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

//화면축을 변경할 수 있는 컴포넌트

const Orbit = () => {
	const { camera, gl } = useThree();
	return <orbitControls args={[camera, gl.domElement]} />
}

const Box = (props) => {
	const ref = useRef(null);

	useFrame(() => {
		ref.current.rotation.x += 0.01;
		ref.current.rotation.y += 0.01;
	});

	return (
		//전달된 props를 rest parameter를 이용해 한꺼번에 모두적용 
		<mesh ref={ref} {...props}>
			<boxBufferGeometry />
			<meshBasicMaterial color='blue' />
		</mesh>
	)
}

function App() {
	return (
		<figure>
			<Canvas
				style={{ background: '#111' }}
				camera={{ position: [7, 7, 7] }}>
				<axesHelper args={[6]} />
				<Orbit />
				{/* Box 컴포넌트 호출시 위치값을 props로 전달 */}
				<Box position={[0, 0, 0]} />
			</Canvas>
		</figure>
	);
}

export default App;
import './scss/style.scss';
import { Canvas, useFrame } from 'react-three-fiber';
import { useRef } from 'react';

const Box = () => {
	const ref = useRef(null);

	useFrame(() => {
		ref.current.rotation.x += 0.01;
		ref.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={ref}>
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
				<Box />
			</Canvas>
		</figure>
	);
}

export default App;
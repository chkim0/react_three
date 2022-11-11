import './scss/style.scss';
import { Canvas } from 'react-three-fiber';
import { Suspense } from 'react';
import Orbit from './components/Orbit';
import Bulb from './components/Bulb';
import ColorPicker from './components/ColorPicker';
import Dragable from './components/Dragable';
import Model from './components/Model';

function App() {

	return (
		<figure>
			<ColorPicker />
			<Canvas
				shadowMap
				style={{ background: '#333' }}
				camera={{ position: [-8, 2, -4] }}>
				<axesHelper args={[6]} />
				<Orbit />

				<ambientLight intensity={0.2} />

				<Dragable>
					<Bulb position={[3, 4, 3]} />

					<Suspense fallback={null}>
						<Model path={`${process.env.PUBLIC_URL}/house/scene.gltf`} />
					</Suspense>
				</Dragable>

			</Canvas>
		</figure>
	);
}

export default App;
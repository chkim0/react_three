const Bulb = (props) => {
    return (
        <mesh {...props}>
            <pointLight castShadow intensity={1} color='white' />
            <sphereBufferGeometry args={[1, 20, 20]} />
            <meshPhongMaterial emissive='yellow' />
        </mesh>
    )
}

export default Bulb;
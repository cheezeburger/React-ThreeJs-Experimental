import * as THREE from "three";
import ReactDOM from "react-dom";
import React, { useState, useCallback, useRef } from "react";
import { Canvas } from "react-three-fiber";
import Effects from "./Components/Effects";
import Sparks from "./Components/Sparks";
import Particles from "./Components/Particles";
import "./styles.css";

function App() {
  const [hovered, hover] = useState(false);
  const [down, set] = useState(false);
  const mouse = useRef([0, 0]);
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  );
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "40%",
          width: "100%",
          textAlign: "center",
          zIndex: "100",
		  display: "block",
		  fontSize: 'calc(20px + 5vw)',
		  fontWeight: '700',
		  letterSpacing: '0.3em',
		  filter: 'blur(0.007em)',
		  animation: 'shake 2.5s linear forwards',
        }}
      >
		ramp! music
      </div>
	  <div
        style={{
          position: "absolute",
          top: "60%",
          width: "100%",
          textAlign: "center",
          zIndex: "100",
		  display: "block",
		  fontSize: '15px',
		  fontWeight: '700',
		  letterSpacing: '0.3em',
		  filter: 'blur(0.007em)',
		  color: '#A9A9A9'
        }}
      >
		artificial intelligence generated music
      </div>
      <Canvas
        pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
        camera={{ fov: 100, position: [0, 0, 30] }}
        onMouseMove={onMouseMove}
        onMouseUp={() => set(false)}
        onMouseDown={() => set(true)}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.Uncharted2ToneMapping;
          gl.setClearColor(new THREE.Color("#000000"));
        }}
      >
        <fog attach="fog" args={["red", 50, 190]} />
        <pointLight distance={100} intensity={4} color="white" />
        <Particles count={isMobile ? 300 : 500} mouse={mouse} />
		<Sparks count={25} mouse={mouse} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} />
        <Effects down={down} />
      </Canvas>
    </>
  );
}

export default App;

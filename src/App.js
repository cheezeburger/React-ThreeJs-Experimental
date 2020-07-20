import * as THREE from "three";
import React, { useState, useCallback, useRef } from "react";
import { Canvas } from "react-three-fiber";
import Effects from "./Components/Effects";
import Sparks from "./Components/Sparks";
import Particles from "./Components/Particles";
import "./styles.css";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

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
        <pointLight distance={100} intensity={10} color="white" />
        <Particles count={isMobile ? 300 : 500} mouse={mouse} />
		<Sparks count={25} mouse={mouse} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} />
        <Effects down={down} />
      </Canvas>
	  <ReactJkMusicPlayer 
		autoPlay={true} 
		showDownload={false}
		spaceBar={true}
		showDestroy={false}
		toggleMode={false}
		mode='full'
		showMiniModeCover={false}
		responsive={false}
		audioLists={audioList}
	/>
    </>
  );
}

const audioList = [
	{
		name: '4a.m. Dream',
		singer: 'ramp!',
		musicSrc:() => {
			return Promise.resolve(
			  'https://res.cloudinary.com/graphicito/video/upload/v1589036649/4a.m._Dream_iio611.wav'
			)
		  },
	},
	{
		name: 'Lost Track',
		singer: 'ramp!',
		musicSrc:
		  'https://res.cloudinary.com/graphicito/video/upload/v1589037919/Canyouseeimlost_jl4m1h.wav',
	},
	{
		name: 'Colorless',
		singer: 'ramp!',
		musicSrc:
		  'https://res.cloudinary.com/graphicito/video/upload/v1589037157/Colorless_jn2opd.wav',
	},
	{
		name: 'Frozen Fairytail',
		singer: 'ramp!',
		musicSrc:
		  'https://res.cloudinary.com/graphicito/video/upload/v1589037841/Frozen_Fairy_Tail_imuyeo.wav',
	},
	{
		name: 'Hearing Things',
		singer: 'ramp!',
		musicSrc:
		  'https://res.cloudinary.com/graphicito/video/upload/v1589037859/You_are_hearing_things_dobvrg.wav',
	},
	{
		name: 'Relate',
		singer: 'ramp!',
		musicSrc:
		  'https://res.cloudinary.com/graphicito/video/upload/v1589037857/Relate_lu5ip9.wav',
	},
	{
		name: 'Tidal Waves',
		singer: 'ramp!',
		musicSrc:
		  'https://res.cloudinary.com/graphicito/video/upload/v1589037837/Tide_wave_oqc6da.wav',
	},
	{
		name: 'Time in Motion',
		singer: 'ramp!',
		musicSrc:
		  'https://res.cloudinary.com/graphicito/video/upload/v1589037822/Time_in_Motion_yreyzn.wav',
	},
	{
		name: 'The Magical Harp',
		singer: 'ramp!',
		musicSrc:
		  'https://res.cloudinary.com/graphicito/video/upload/v1589037585/The_Magical_Harp_l4opv4.wav',
	},
	{
		name: 'The Frozen Ballroom',
		singer: 'ramp!',
		musicSrc:
		  'https://res.cloudinary.com/graphicito/video/upload/v1589037848/the_frozen_ballroom_p4ggdn.wav',
	},
]
export default App;

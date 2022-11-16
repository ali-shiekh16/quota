import React, { useContext, useEffect, useState, useRef } from 'react';
import AppContext from '../../context/app/AppContext';
import Features from './components/Features/Features';
import FutureDefi from './components/FutureDefi/FutureDefi';
import Partners from './components/Partners/Partners';
import TechStack from './components/TechStack/TechStack';
import WhatCrytical from './components/WhatCrytical/WhatCrytical';
import styles from './Home.module.scss';
import { Canvas } from '@react-three/fiber';
import Color from '../../assets/color.png';
import { MeshDistortMaterial, useTexture } from '@react-three/drei';

const Mesh = props => {
  const texture = useTexture(Color);

  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 50, 50]} />
      <MeshDistortMaterial
        map={texture}
        distort={0.4}
        speed={5}
        metalness={0.05}
        roughness={0.1}
      />
    </mesh>
  );
};

const Three = () => {
  const [mobile, setMobile] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [xcord, setxcord] = new useState(0);
  const [ycord, setycord] = new useState(0);

  useEffect(() => {
    window.innerWidth < 768 ? setMobile(true) : setDesktop(true);
  }, [window.innerWidth]);

  useEffect(() => {
    window.onmousemove = e => {
      setxcord(((e.clientX / window.innerWidth) * 2 - 1) / 4);
      setycord((-(e.clientY / window.innerWidth) * 2 - 1) / 4);
    };
  }, []);

  return (
    <iframe
      src='https://fastidious-heliotrope-fe6e85.netlify.app/'
      style={{ width: '100%', height: '100%', position: 'fixed' }}
      allowTransparency
    ></iframe>
    // <div style={{ border: 'solid red 2px' }}>
    // <Canvas>
    //   <ambientLight intensity={0.6} />
    //   <directionalLight intensity={0.8} position={[5, 5, 0]} />
    //   {desktop && (
    //     <>
    //       <Mesh position={[-3 + xcord, 1 + ycord, 2]} />
    //       <Mesh
    //         position={[7 + xcord, 2 + ycord, 0]}
    //         rotation-y={Math.PI * 0.7}
    //         rotation-x={Math.PI * 1}
    //       />
    //     </>
    //   )}
    //   {mobile && (
    //     <>
    //       <Mesh position={[1.5, 2, 0]} scale={1} rotation-y={Math.PI * 1.5} />
    //       <Mesh position={[-1.5, 0, 0]} scale={1} rotation-y={Math.PI * 1.5} />
    //     </>
    //   )}
    // </Canvas>
    // </div>
  );
};
const Home = () => {
  const appContext = useContext(AppContext);

  const { setNavbarValue } = appContext;

  useEffect(() => {
    setNavbarValue(true);
  }, []);

  return (
    <>
      <div className={styles.three}>
        <Three />
      </div>

      <div className={styles.Home}>
        <FutureDefi />
        <WhatCrytical />
        <Features />
        <TechStack />
        {/* <Team/> */}
        <Partners />
      </div>
    </>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;

import React from 'react';
import Fade from 'react-reveal/Fade';

const FullScreenVideo = () => (
  <section className="fullscreen-video">
    <div className="fullscreen-video__wrap">
      <video src="/videos/hero.mp4" autoPlay={true} loop={true} />
    </div>
    <div className="fullscreen-video__header-overlay bg-theme-gradient" />
    <div className="fullscreen-video__header-content text-center">
      <Fade top duration={800} delay={800}>
        <h1>Creamos soluciones eficientes</h1>
      </Fade>
      <Fade top duration={800} delay={1200}>
        <p>
          Mockraft es una agencia digital enfocada en hacer realidad ideas
          innovadoras.
        </p>
      </Fade>
    </div>
  </section>
);

export default FullScreenVideo;

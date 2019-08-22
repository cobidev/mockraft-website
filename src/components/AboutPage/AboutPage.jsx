import React from 'react';
import Fade from 'react-reveal/Fade';
import BannerWrapper from '../BannerWrapper/BannerWrapper';
import RichText from '../RichText';
import ImageWithText from './ImageWithText/ImageWithText';
import Footer from '../Footer/Footer';

const title = (
  <Fade top duration={500} delay={500} distance={'30px'}>
    <h1 className="display-4 font-weight-bold text-center text-white">
      Nosotros
    </h1>
  </Fade>
);

const AboutPage = () => (
  <main className="page">
    <BannerWrapper backgroundColor="bg-theme-gradient">{title}</BannerWrapper>
    <RichText title="¿Qué es Mockraft?">
      <>
        <p className="text-grey font-small">
          Somos una agencia digital de profesionales apasionados, comprometidos
          en ofrecer soluciones digitales efectivas y de calidad que satisfagan
          las necesidades de nuestros clientes.
        </p>
        <p className="text-grey font-small">
          Nuestro equipo de trabajo se caracteriza por combinar trayectoria y
          aprendizaje continuo ya que sumamos más de 20 años de experiencia en
          los distintos departamentos.
        </p>
        <p className="text-grey font-small">
          “Mock proviene de la palabra ( Mockup ), es el plano de nuestras
          ideas, donde definimos nuestra estrategia digital a realizar. Mientras
          que Craft ( Crafting ), es la acción de crear y construir esa idea,
          cuando juntamos estos 2 términos, obtenemos una solución estructurada
          de manera eficiente, he ahí nuestra esencia como Agencia.”
        </p>
      </>
    </RichText>
    <ImageWithText toRight={true} backgroundColor="bg-main-color" img="1" />
    <ImageWithText backgroundColor="bg-sec-color" img="2" />
    <Footer />
  </main>
);

export default AboutPage;

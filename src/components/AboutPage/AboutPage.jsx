import React from 'react';
import Fade from 'react-reveal/Fade';
import BannerWrapper from '../BannerWrapper/BannerWrapper';
import RichTextBanner from './RichTextBanner/RichTextBanner';
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
    <RichTextBanner />
    <ImageWithText toRight={true} backgroundColor="bg-main-color" img="1" />
    <ImageWithText backgroundColor="bg-sec-color" img="2" />
    <Footer />
  </main>
);

export default AboutPage;

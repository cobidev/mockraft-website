import React, { useEffect } from 'react';
import FullScreenVideo from './FullScreenVideo/FullScreenVideo';
import WorkflowInfo from './WorkflowInfo/WorkflowInfo';
import ServicesInfo from './ServicesInfo/ServicesInfo';
import ReviewsSlide from './ReviewsSlide/ReviewsSlide';
import ClientsLogos from './ClientsLogos/ClientsLogos';
import InfoCTA from './InfoCTA/InfoCTA';
import BannerWrapper from '../BannerWrapper/BannerWrapper';
import Footer from '../Footer/Footer';
import { scrollToTop } from '../../hooks';

const HomePage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <main className='page'>
      <FullScreenVideo />
      <WorkflowInfo />
      <ServicesInfo />
      <ReviewsSlide />
      <ClientsLogos />
      <BannerWrapper backgroundColor='bg-theme-gradient'>
        <InfoCTA />
      </BannerWrapper>
      <Footer />
    </main>
  );
};

export default HomePage;

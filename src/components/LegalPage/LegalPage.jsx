import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import BannerWrapper from '../BannerWrapper/BannerWrapper';
import TerminosText from './TerminosText';
import PrivacidadText from './PrivacidadText';
import Footer from '../Footer/Footer';

const LegalPage = props => {
  return (
    <main className="page">
      <BannerWrapper backgroundColor="bg-theme-gradient">
        <Fade top duration={500} delay={500} distance={'30px'}>
          <h1 className="display-4 font-weight-bold text-center text-white">
            {props.match.url === '/terminos' && 'Términos y Condiciones de Uso'}
            {props.match.url === '/privacidad' && 'Política de Privacidad'}
          </h1>
        </Fade>
      </BannerWrapper>
      <section className="section-spacing bg-grey-light">
        <Container>
          <Row>
            <Col sm="12">
              {props.match.url === '/terminos' && <TerminosText />}
              {props.match.url === '/privacidad' && <PrivacidadText />}
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </main>
  );
};

export default LegalPage;

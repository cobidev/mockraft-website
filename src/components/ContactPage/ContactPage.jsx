import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer/Footer';
import { scrollToTop } from '../../hooks';

const ContactPage = props => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <main className='page'>
      <section className='section-spacing--sm bg-theme-gradient'>
        <Container fluid>
          <Row>
            <Col md={6}>
              <Fade left duration={500} delay={500} distance={'30px'}>
                <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                  <img
                    className='contact-image img-fluid'
                    src='/images/contact.svg'
                    alt='Contact Illustration'
                  />
                </div>
              </Fade>
            </Col>
            <Col md={6}>
              <Fade bottom duration={500} delay={800} distance={'30px'}>
                <ContactForm history={props.history} />
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const RichText = ({ title, subtitle, children }) => (
  <section className='section-spacing'>
    <Container>
      <Row>
        <Col md='12'>
          <article>
            {!title ? (
              ''
            ) : (
              <div>
                {/* Return link */}
                {subtitle && (
                  <Fade bottom duration={600} delay={1500} distance={'30px'}>
                    <Link
                      to='/portafolio'
                      className='d-inline-block primary-color font-small mb-5'>
                      <u>Regresar</u>
                    </Link>
                  </Fade>
                )}
                {/* Title */}
                <Fade bottom duration={500} delay={500} distance={'30px'}>
                  <h2
                    className={`${
                      subtitle ? 'section-title--big' : 'section-title'
                    } text-main`}>
                    {title}
                  </h2>
                </Fade>
                {/* Subtitle */}
                {subtitle && (
                  <Fade bottom duration={500} delay={800} distance={'15px'}>
                    <h2 className='section-subtitle text-main'>{subtitle}</h2>
                  </Fade>
                )}
                {/* Divider */}
                <Fade bottom duration={500} delay={800} distance={'15px'}>
                  <span className='span-divider mt-4 mb-5' />
                </Fade>
              </div>
            )}
            {/* Text */}
            <Fade left duration={500} delay={800} distance={'30px'}>
              {children}
            </Fade>
          </article>
        </Col>
      </Row>
    </Container>
  </section>
);

export default RichText;

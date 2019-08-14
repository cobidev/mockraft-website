import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const RichTextBanner = ({ title, children }) => (
  <section className="section-spacing bg-grey-light">
    <Container>
      <Row>
        <Col md="12">
          <article>
            {!title ? (
              ''
            ) : (
              <div>
                <Fade bottom duration={500} delay={500} distance={'30px'}>
                  <h2 className="section-title text-main">{title}</h2>
                </Fade>
                <Fade bottom duration={500} delay={800} distance={'15px'}>
                  <span className="span-divider mt-4 mb-5" />
                </Fade>
              </div>
            )}
            <Fade left duration={500} delay={800} distance={'30px'}>
              {children}
            </Fade>
          </article>
        </Col>
      </Row>
    </Container>
  </section>
);

export default RichTextBanner;

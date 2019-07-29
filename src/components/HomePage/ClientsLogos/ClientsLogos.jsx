import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const ClientsLogos = () => {
  return (
    <section className="w-100 bg-grey-light section-spacing">
      <Container>
        <Row className="align-items-center">
          <Col lg="9" className="mb-4">
            <Fade left duration={500} delay={500} distance={'30px'}>
              <h2 className="section-title text-main mb-3">
                Nuestras herramientas
              </h2>
              <p className="client-logos__text">
                Mockraft valora y utiliza algunas de las mejores herramientas
                que existen para garantizar el éxito del proyecto.
              </p>
            </Fade>
          </Col>
        </Row>
        <Fade right duration={500} delay={800} distance={'30px'}>
          <Row className="align-items-center justify-content-center pt-4">
            <Col lg="3" className="col-6">
              <div className="client-logos__image-wrapper">
                <img
                  width="200"
                  className="img-fluid"
                  alt="client-logo-1"
                  src="/images/tools/heroku.svg"
                />
              </div>
            </Col>
            <Col lg="3" className="col-6">
              <div className="client-logos__image-wrapper">
                <img
                  width="200"
                  className="img-fluid"
                  alt="client-logo-2"
                  src="/images/tools/Node.svg"
                />
              </div>
            </Col>
            <Col lg="3" className="col-6">
              <div className="client-logos__image-wrapper">
                <img
                  width="200"
                  className="img-fluid"
                  alt="client-logo-3"
                  src="/images/tools/Shopify.svg"
                />
              </div>
            </Col>
            <Col lg="3" className="col-6">
              <div className="client-logos__image-wrapper">
                <img
                  width="200"
                  className="img-fluid"
                  alt="client-logo-4"
                  src="/images/tools/woocommerce.svg"
                />
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default ClientsLogos;

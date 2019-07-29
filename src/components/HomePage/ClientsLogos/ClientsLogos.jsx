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
                Mockraft utiliza algunas de las mejores herramientas que existen
                para garantizar el éxito del proyecto.
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
                  alt="Heroku"
                  src="/images/tools/heroku.svg"
                />
              </div>
            </Col>
            <Col lg="3" className="col-6">
              <div className="client-logos__image-wrapper">
                <img
                  width="200"
                  className="img-fluid"
                  alt="Shopify"
                  src="/images/tools/Shopify.svg"
                />
              </div>
            </Col>
            <Col lg="3" className="col-6">
              <div className="client-logos__image-wrapper">
                <img
                  width="200"
                  className="img-fluid"
                  alt="WordPress"
                  src="/images/tools/wordpress.svg"
                />
              </div>
            </Col>
            <Col lg="3" className="col-6">
              <div className="client-logos__image-wrapper">
                <img
                  width="200"
                  className="img-fluid"
                  alt="WooCommerce"
                  src="/images/tools/woocommerce.svg"
                />
              </div>
            </Col>
            <Col lg="2" className="col-6">
              <div className="client-logos__image-wrapper">
                <img
                  width="100"
                  className="img-fluid"
                  alt="React"
                  src="/images/tools/react.svg"
                />
              </div>
            </Col>
            <Col lg="3" className="col-6">
              <div className="client-logos__image-wrapper">
                <img
                  width="200"
                  className="Node.js"
                  alt="client-logo-3"
                  src="/images/tools/Node.svg"
                />
              </div>
            </Col>
            <Col lg="3" className="col-6">
              <div className="client-logos__image-wrapper">
                <img
                  width="200"
                  className="img-fluid"
                  alt="MongoDB"
                  src="/images/tools/mongodb.svg"
                />
              </div>
            </Col>
            <Col lg="3" className="col-6">
              <div className="client-logos__image-wrapper">
                <img
                  width="200"
                  className="img-fluid"
                  alt="Trello"
                  src="/images/tools/trello.svg"
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

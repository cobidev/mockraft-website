import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const ServicesInfo = () => (
  <section className="bg-grey-light section-spacing">
    <Container>
      <Fade bottom duration={500} delay={500} distance={'30px'}>
        <h2 className="section-title mb-3 text-center text-main">
          Qué Ofrecemos
        </h2>
      </Fade>
      <Fade bottom duration={500} delay={800} distance={'15px'}>
        <hr className="theme-divider mt-4 mb-5" />
      </Fade>
      <Row>
        <Col lg="4">
          <Fade bottom duration={500} delay={800} distance={'20px'}>
            <div className="service__card-wrapper">
              <div className="mb-2 text-center">
                <img
                  className=" service__icon-svg"
                  src="/images/icons/web.svg"
                  alt="Web Development"
                />
              </div>
              <h3 className="mb-3 service__heading-title text-center text-main">
                Desarrollo Web
              </h3>
              <p className="mb-3 service__text text-main">
                Sitios Web Corporativos
                <br />
                Sitios Web Personales
                <br />
                Sitios WordPress
              </p>
            </div>
          </Fade>
        </Col>
        <Col lg="4">
          <Fade bottom duration={500} delay={1000} distance={'20px'}>
            <div className="service__card-wrapper">
              <div className="mb-2 text-center">
                <img
                  className=" service__icon-svg"
                  src="/images/icons/cart.svg"
                  alt="Web Development"
                />
              </div>
              <h3 className="mb-3 service__heading-title text-center text-main">
                E-commerce
              </h3>
              <p className="mb-3 service__text text-main">
                Tienda WooCommerce
                <br />
                Tienda Shopify
                <br />
                Tienda Online
              </p>
            </div>
          </Fade>
        </Col>
        <Col lg="4">
          <Fade bottom duration={500} delay={1200} distance={'20px'}>
            <div className="service__card-wrapper">
              <div className="mb-2 text-center">
                <img
                  className=" service__icon-svg"
                  src="/images/icons/app.svg"
                  alt="Web Development"
                />
              </div>
              <h3 className="mb-3 service__heading-title text-center text-main">
                Front-end & Back-end
              </h3>
              <p className="mb-3 service__text text-main">
                Aplicaciones Web
                <br />
                Consultoría
                <br />
                APIS
              </p>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ServicesInfo;

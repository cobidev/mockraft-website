import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <main className="page">
      <section className="section-spacing bg-grey-light">
        <Container>
          <Row>
            <Col sm="12" md="6">
              <Fade left duration={500} delay={500} distance={'30px'}>
                <img
                  width="500px"
                  className="img-fluid"
                  src="/images/404.svg"
                  alt="Not Found"
                />
              </Fade>
            </Col>
            <Col sm="12" md="6">
              <Fade left duration={500} delay={1000} distance={'30px'}>
                <article className="h-100 d-flex flex-column justify-content-center">
                  <h1 className="notfound-title font-weight-bold text-main">
                    <span className="d-block mb-3">Oops!</span>
                    <span className="d-block mb-5">
                      La pagina que buscas no existe.
                    </span>
                  </h1>
                  <Link
                    to="/"
                    className="notfound-button d-block align-self-start font-medium btn-theme btn-theme--main">
                    Regresar
                  </Link>
                </article>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default NotFoundPage;

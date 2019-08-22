import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const WorkflowInfo = () => (
  <section className="bg-white section-spacing">
    <Container>
      <Fade bottom duration={500} delay={500} distance={'30px'}>
        <h2 className="section-title mb-3 text-center text-main">
          Cómo Trabajamos
        </h2>
      </Fade>
      <Fade bottom duration={500} delay={800} distance={'15px'}>
        <hr className="theme-divider mt-4 mb-5" />
      </Fade>
      <Fade left duration={500} delay={800} distance={'30px'}>
        <Row>
          <Col md="4" className="col-12">
            <div className="workflow__wrapper">
              <div className="d-flex align-items-center mb-2">
                <span className="text-grey-light display-3 mr-4">1</span>
                <img
                  className="workflow__icon-svg"
                  src="/images/icons/new.svg"
                  alt="Web Development"
                />
              </div>
              <h3 className="mb-3 workflow__heading-title text-main">
                Estrategia
              </h3>
              <p className="mb-3 workflow__text text-grey">
                Definimos los objetivos y requerimientos técnicos del proyecto,
                a fin de estimar el alcance y tiempo de entrega para cumplir con
                la calidad que el cliente espera.
              </p>
            </div>
          </Col>
          <Col md="4" className="col-12">
            <div className="workflow__wrapper">
              <div className="d-flex align-items-center mb-2">
                <span className="text-grey-light display-3 mr-4">2</span>
                <img
                  className=" workflow__icon-svg"
                  src="/images/icons/box.svg"
                  alt="Web Development"
                />
              </div>
              <h3 className="mb-3 workflow__heading-title text-main">
                Desarrollo
              </h3>
              <p className="mb-3 workflow__text text-grey">
                Una vez definidos los requerimientos y tiempo de entrega,
                trabajamos bajo la metodología SCRUM, la cual nos permite ir
                evaluando en tiempo real el progreso del proyecto.
              </p>
            </div>
          </Col>
          <Col md="4" className="col-12">
            <div className="workflow__wrapper">
              <div className="d-flex align-items-center mb-2">
                <span className="text-grey-light display-3 mr-4">3</span>
                <img
                  className=" workflow__icon-svg"
                  src="/images/icons/play.svg"
                  alt="Web Development"
                />
              </div>
              <h3 className="mb-3 workflow__heading-title text-main">
                Ejecución
              </h3>
              <p className="mb-3 workflow__text text-grey">
                Acompañamos al cliente en la preparación del entorno y nos
                encargamos del lanzamiento. Mockraft proporciona el código de
                mayor calidad y desarrollo de productos.
              </p>
            </div>
          </Col>
        </Row>
      </Fade>
    </Container>
  </section>
);

export default WorkflowInfo;

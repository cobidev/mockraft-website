import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const ImageWithText = ({ toRight, backgroundColor, img }) => {
  let isPhone = window.innerWidth <= 996 ? '0px' : '30px';

  return (
    <section className={`${backgroundColor}`}>
      <Container>
        {toRight ? (
          <Row>
            <Col md="6" className="p-0">
              <Fade right duration={500} delay={800} distance={isPhone}>
                <article className="py-5">
                  <div className="p-5">
                    <div>
                      <h2 className="section-title text-white mb-4">
                        ¿Porque nosotros?
                      </h2>
                    </div>
                    <div className="text-white">
                      <p className="font-small">
                        Sea cual sea su servicio o producto, lo cubrimos con
                        nuestro equipo profesional de desarrolladores, gerentes
                        y comercializadores. Lo tenemos cubierto desde el primer
                        día y aseguramos el éxito de su producto.
                      </p>
                    </div>
                  </div>
                </article>
              </Fade>
            </Col>

            <Col md="6" className="p-0">
              <Fade right duration={500} delay={500} distance={isPhone}>
                <article className="about-page__image">
                  <div
                    className={`about-page__image--img about-page__image--img-${img}`}
                  />
                  <div className="about-page__image--overlay" />
                </article>
              </Fade>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col md="6" className="p-0">
              <Fade left duration={500} delay={500} distance={isPhone}>
                <article className="about-page__image">
                  <div
                    className={`about-page__image--img about-page__image--img-${img}`}
                  />
                  <div className="about-page__image--overlay" />
                </article>
              </Fade>
            </Col>

            <Col md="6" className="p-0">
              <Fade left duration={500} delay={800} distance={isPhone}>
                <article className="py-5">
                  <div className="p-5">
                    <div>
                      <h2 className="section-title text-white mb-4">
                        Desarrollo elástico
                      </h2>
                    </div>
                    <div className="text-white">
                      <p className="font-small">
                        Usted podría preguntarse, ¿qué es el desarrollo
                        elástico? Mockraft está configurado con la perspectiva
                        de crecimiento en mente. Ya sea que necesite comenzar
                        con uno o diez desarrolladores, tenemos los recursos
                        para obtener la fuerza laboral que necesita.
                      </p>
                    </div>
                  </div>
                </article>
              </Fade>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default ImageWithText;

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
                        Nos comprometemos con dedicación en cada proyecto,
                        garantizando óptimos resultados en la mejor relación
                        precio / valor. Siendo la innovación y la investigación
                        constante nuestros mejores estandartes.
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
                        Growth Hacking
                      </h2>
                    </div>
                    <div className="text-white">
                      <p className="font-small">
                        Basamos el desarrollo de nuestros productos y servicios
                        en la investigación y análisis de datos, buscamos nuevas
                        formulas, con un mínimo gasto, para hacer crecer su
                        producto digital y conseguir que la gente lo use, les
                        aporte valor, y especialmente se sienta identificado.
                        Nuestra metodología es la conjunción perfecta entre
                        ciencia, creatividad y mejoramiento continuo.
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

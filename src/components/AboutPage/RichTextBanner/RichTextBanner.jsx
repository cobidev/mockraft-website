import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const RichTextBanner = () => (
  <section className="section-spacing bg-grey-light">
    <Container>
      <Row>
        <Col md="12">
          <article className="mb-5">
            <div>
              <Fade bottom duration={500} delay={500} distance={'30px'}>
                <h2 className="section-title text-main">¿Qué es Mockfrat?</h2>
              </Fade>
              <Fade bottom duration={500} delay={800} distance={'15px'}>
                <span className="span-divider mt-4 mb-5" />
              </Fade>
            </div>
            <Fade left duration={500} delay={800} distance={'30px'}>
              <div>
                <p className="text-grey font-small">
                  Somos una agencia digital de profesionales apasionados,
                  comprometidos en ofrecer soluciones digitales efectivas y de
                  calidad que satisfagan las necesidades de nuestros clientes.
                </p>
                <p className="text-grey font-small">
                  Nuestro equipo de trabajo se caracteriza por combinar
                  trayectoria y aprendizaje continuo ya que sumamos más de 20
                  años de experiencia en los distintos departamentos.
                </p>
                <p className="text-grey font-small">
                  “Mock proviene de la palabra ( Mockup ), es el plano de
                  nuestras ideas, donde definimos nuestra estrategia digital a
                  realizar. Mientras que Craft ( Crafting ), es la acción de
                  crear y construir esa idea, cuando juntamos estos 2 términos,
                  obtenemos una solución estructurada de manera eficiente, he
                  ahí nuestra esencia como Agencia.”
                </p>
              </div>
            </Fade>
          </article>
        </Col>
      </Row>
    </Container>
  </section>
);

export default RichTextBanner;

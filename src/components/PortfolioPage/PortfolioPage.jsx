import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const PortfolioPage = () => {
  let isPhone = window.innerWidth <= 996 ? '0px' : '30px';

  return (
    <main className="page">
      <section className="section-spacing bg-grey-light">
        <Container>
          <Row>
            <Col sm="12">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Fade left duration={500} delay={500} distance={'30px'}>
                  <img
                    width="500px"
                    className="img-fluid mb-5 pb-5"
                    src="/images/construction.svg"
                    alt="Under Construction"
                  />
                </Fade>
                <Fade right duration={500} delay={800} distance={isPhone}>
                  <h2 className="text-main text-center font-big font-weight-bold">
                    <span className="d-block mb-4">
                      Estamos trabajando en algo asombroso.
                    </span>
                    ¡Pronto lo confirmarás!
                  </h2>
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </main>
  );
};

export default PortfolioPage;

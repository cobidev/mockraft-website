import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="section-spacing bg-white">
    <Container>
      <Row>
        <Col md="6" className="col-12">
          <div className="content-wrapper">
            <h3 className="mb-3 text-main">Mockraft Agency</h3>
            <p className="text-grey font-small">
              Somos una agencia digital de profesionales apasionados,
              comprometidos en ofrecer soluciones digitales efectivas y de
              calidad que satisfagan las necesidades de nuestros clientes.
            </p>
          </div>
        </Col>
        <Col md="3" className="col-12">
          <div className="content-wrapper">
            <h3 className="text-main">Contáctanos</h3>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <img src="/images/arrow-r-footer.svg" alt="link-arrow" />
                <Link className="text-grey" to="/contacto">
                  info@mockrat.com
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <img src="/images/arrow-r-footer.svg" alt="link-arrow" />
                <a className="text-grey" href="#!">
                  +58 426-637-4535
                </a>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <Col md="3" className="col-12">
          <div className="content-wrapper">
            <h3 className="text-main">Agencia</h3>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <img src="/images/arrow-r-footer.svg" alt="link-arrow" />
                <Link className="text-grey" to="/terminos">
                  Términos y Condiciones
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <img src="/images/arrow-r-footer.svg" alt="link-arrow" />
                <Link className="text-grey" to="/privacidad">
                  Política de Privacidad
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <hr />
          <p className="mt-4 pt-5 text-center text-grey font-small">
            2019 Mockraft Agency © Todos los derechos reservados.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

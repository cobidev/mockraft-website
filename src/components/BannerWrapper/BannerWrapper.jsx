import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BannerWrapper = ({ backgroundColor, children }) => (
  <section className={`w-100 section-spacing ${backgroundColor || ''}`}>
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md="12">{children}</Col>
      </Row>
    </Container>
  </section>
);

export default BannerWrapper;

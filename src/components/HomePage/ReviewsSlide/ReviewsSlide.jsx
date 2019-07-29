import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const ReviewsSlide = () => {
  return (
    <section id="reviews-slide" className="section-spacing bg-white">
      <Container>
        <Fade bottom duration={500} delay={500} distance={'30px'}>
          <h2 className="text-main section-title text-center mb-3">
            ¿Que dicen nuestros clientes?
          </h2>
        </Fade>
        <Fade bottom duration={500} delay={800} distance={'15px'}>
          <hr className="theme-divider mt-4 mb-5" />
        </Fade>
        <Fade bottom duration={500} delay={1000} distance={'15px'}>
          <Carousel className="d-flex">
            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md="7" className="text-center testimonial__column">
                  <p className="testimonial__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla pariatur dolorum sapiente! Molestias ducimus placeat
                    dolorem animi soluta excepturi numquam, necessitatibus
                    deleniti ipsam expedita dolorum quo est enim eveniet quas.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla pariatur dolorum sapiente!
                  </p>
                  <h3 className="text-main testimonial__author">- Ilse G.</h3>
                  <div className="text-center">
                    <h2 className="testimonial__title">Mura Consultory</h2>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md="7" className="text-center testimonial__column">
                  <p className="testimonial__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla pariatur dolorum sapiente! Molestias ducimus placeat
                    dolorem animi soluta excepturi numquam, necessitatibus
                    deleniti ipsam expedita dolorum quo est enim eveniet quas.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla pariatur dolorum sapiente!
                  </p>
                  <h3 className="testimonial__author">- Ilse G.</h3>
                  <div className="text-center">
                    <h2 className="testimonial__title">Mura Consultory</h2>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md="7" className="text-center testimonial__column">
                  <p className="testimonial__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla pariatur dolorum sapiente! Molestias ducimus placeat
                    dolorem animi soluta excepturi numquam, necessitatibus
                    deleniti ipsam expedita dolorum quo est enim eveniet quas.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla pariatur dolorum sapiente!
                  </p>
                  <h3 className="testimonial__author">- Ilse G.</h3>
                  <div className="text-center">
                    <h2 className="testimonial__title">Mura Consultory</h2>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Fade>
      </Container>
    </section>
  );
};

export default ReviewsSlide;

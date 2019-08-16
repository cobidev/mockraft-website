import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const reviews = [
  {
    id: 1,
    texto:
      'El equipo de Mockraft siempre están atentos a cada detalle que el cliente necesita, disponibles todo el tiempo para despejar cualquier duda y ademas otorgan el valor extra de asumir los proyectos como propios. Los recomiendo ampliamente.',
    author: 'Daniella V.',
    empresa: 'SiChef.org'
  },
  {
    id: 2,
    texto:
      'En nuestra experiencia, recomendamos contratar los servicios de Mockraft, ya que son asertivos y se preocupan  honestamente por lograr la satisfacción del cliente. Amabilidad, creatividad y eficiencia serian las palabras para describirlos.',
    author: 'Karla E.',
    empresa: 'Escobar Consultores Asociados.'
  },
  {
    id: 3,
    texto:
      'Son una agencia maravillosa, aportan ideas a tu proyecto, te asesoran en el modelo de negocio, incluso si no estas familiarizado con el mundo de la web y lo hacen con una pasión contagiosa. Una grata experiencia poder contar con sus servicios.',
    author: 'Nasr Malik',
    empresa: 'Global Nsr Inc.'
  }
];

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
            {reviews.map(review => {
              return (
                <Carousel.Item key={review.id}>
                  <Row className="justify-content-center">
                    <Col md="7" className="text-center testimonial__column">
                      <p className="testimonial__text">{review.texto}</p>
                      <h3 className="text-main testimonial__author">
                        {`- ${review.author}`}
                      </h3>
                      <div className="text-center">
                        <h2 className="testimonial__title">{review.empresa}</h2>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Fade>
      </Container>
    </section>
  );
};

export default ReviewsSlide;

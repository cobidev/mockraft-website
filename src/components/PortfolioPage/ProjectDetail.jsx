import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Redirect } from 'react-router-dom';
import BannerWrapper from '../BannerWrapper/BannerWrapper.jsx';
import InfoCTA from '../HomePage/InfoCTA/InfoCTA.jsx';
import RichText from '../RichText.jsx';
import Footer from '../Footer/Footer.jsx';
import { ProjectConsumer } from '../../context';

const ProjectDetail = () => (
  <ProjectConsumer>
    {value => {
      const {
        title,
        type,
        url,
        about,
        solution,
        mockImg
      } = value.detailProject;

      if (!title || !type || !url || !about || !solution || !mockImg) {
        return <Redirect to="/portafolio" />;
      }

      return (
        <main className="page">
          <section className="bg-grey-light">
            <RichText title={title} subtitle={type}>
              <>
                <div className="pb-4">
                  <h2 className="font-medium font-weight-bold text-main">
                    El cliente
                  </h2>
                  <p className="text-grey font-small">{about}</p>
                </div>

                <div className="pb-4">
                  <h2 className="font-medium font-weight-bold text-main">
                    Nuestra solución
                  </h2>
                  <p className="text-grey font-small">{solution}</p>
                </div>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-block font-small btn-theme btn-theme--sec">
                  Ver proyecto
                </a>
              </>
            </RichText>

            <article style={{ paddingBottom: '8rem' }}>
              <Container>
                <Row>
                  <Col md="12" lg="8" className="mx-auto">
                    <Fade bottom duration={500} delay={1000} distance={'20px'}>
                      <img src={mockImg} alt={title} className="img-fluid" />
                    </Fade>
                  </Col>
                </Row>
              </Container>
            </article>
          </section>

          <BannerWrapper backgroundColor="bg-theme-gradient">
            <InfoCTA />
          </BannerWrapper>
          <Footer />
        </main>
      );
    }}
  </ProjectConsumer>
);

export default ProjectDetail;

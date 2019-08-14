import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row } from 'react-bootstrap';
import BannerWrapper from '../BannerWrapper/BannerWrapper.jsx';
import Project from './Project.jsx';
import { ProjectConsumer } from '../../context';

const title = (
  <Fade top duration={500} delay={500} distance={'30px'}>
    <h1 className="display-4 font-weight-bold text-center text-white">
      Portafolio
    </h1>
  </Fade>
);

const PortfolioPage = () => {
  return (
    <main className="page">
      <BannerWrapper backgroundColor="bg-theme-gradient">{title}</BannerWrapper>
      <section className="section-spacing bg-grey-light">
        <Container fluid>
          <Row>
            <ProjectConsumer>
              {value => {
                console.log(value);
                return value.projects.map(project => {
                  return <Project key={project.id} project={project} />;
                });
              }}
            </ProjectConsumer>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default PortfolioPage;

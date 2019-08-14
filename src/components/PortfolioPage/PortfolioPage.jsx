import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row } from 'react-bootstrap';
import RichText from '../RichText.jsx';
import BannerWrapper from '../BannerWrapper/BannerWrapper.jsx';
import Project from './Project.jsx';
import Footer from '../Footer/Footer.jsx';
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
      <RichText title="">
        <>
          <p className="text-grey font-small">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            officia amet perferendis neque placeat, voluptate aliquam
            reprehenderit saepe provident non architecto perspiciatis distinctio
            nam vero, harum ipsum dolore quam quas.
          </p>
          <p className="text-grey font-small">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            officia amet perferendis neque placeat, voluptate aliquam
            reprehenderit saepe provident non architecto perspiciatis distinctio
            nam vero, harum ipsum dolore quam quas.
          </p>
        </>
      </RichText>
      <section style={{ paddingBottom: '8rem' }} className="bg-grey-light">
        <Container fluid className="px-5">
          <Row>
            <ProjectConsumer>
              {value => {
                return value.projects.map(project => {
                  return <Project key={project.id} project={project} />;
                });
              }}
            </ProjectConsumer>
          </Row>
        </Container>
      </section>
      <Footer />
    </main>
  );
};

export default PortfolioPage;

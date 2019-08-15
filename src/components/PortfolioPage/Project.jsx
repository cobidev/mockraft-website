import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { ProjectConsumer } from '../../context';
import styled from 'styled-components';

const ProjectWrapper = styled.article`
  .card {
    box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);

    .img-container {
      position: relative;
      overflow: hidden;

      &:hover {
        .overlay {
          background: rgba(2, 170, 176, 0.7);
          cursor: pointer;

          span {
            opacity: 1;
          }
        }
      }

      .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(2, 170, 176, 0);
        font-size: 1.4rem;
        transition: all 0.3s ease;

        &__text {
          paddding: 1rem;

          &--title,
          &--subtitle {
            display: block;
            opacity: 0;
            text-align: center;
            font-size: 3.5rem;
            font-weight: bold;
            color: white;
            transition: all 0.3s ease;
          }

          &--subtitle {
            font-size: 2rem;
            font-weight: normal;
          }
        }
      }
    }
  }
`;

const Project = ({ project }) => {
  return (
    <ProjectWrapper className="col-12 col-md-6 col-lg-6 my-3">
      <Fade bottom duration={500} delay={1000} distance={'20px'}>
        <div className="card">
          <ProjectConsumer>
            {value => {
              return (
                <div
                  className="img-container"
                  onClick={() => value.handleDetail(project.id)}>
                  <Link to="/portafolio/detail">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="img-fluid"
                    />
                    <div className="overlay">
                      <div className="overlay__text">
                        <span className="overlay__text--title">
                          {project.title}
                        </span>
                        <span className="overlay__text--subtitle">
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }}
          </ProjectConsumer>
        </div>
      </Fade>
    </ProjectWrapper>
  );
};

export default Project;

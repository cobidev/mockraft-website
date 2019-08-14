import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectConsumer } from '../../context';

const Project = ({ project }) => {
  return (
    <article className="col-9 mx-auto col-md-6 col-lg-4 my-3">
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
              </Link>
            </div>
          );
        }}
      </ProjectConsumer>
    </article>
  );
};

export default Project;

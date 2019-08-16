import React, { Component } from 'react';
import { clientProjects } from './data';

// Create your Context ( this case: Project )
const ProjectContext = React.createContext();

// Create your Provider Component ( this case: Project )
class ProjectProvider extends Component {
  state = {
    projects: [],
    detailProject: {}
  };

  componentDidMount = () => {
    this.setProjects();
  };

  setProjects = () => {
    let projects = [];

    clientProjects.forEach(project => {
      const copyProject = { ...project };
      projects.push(copyProject);
    });

    this.setState(() => ({ projects }));
  };

  getProject = id => {
    const project = this.state.projects.find(project => project.id === id);
    return project;
  };

  handleDetail = id => {
    const project = this.getProject(id);
    this.setState(() => ({ detailProject: project }));
  };

  handleCloseDetail = () => this.setState(() => ({ detailProject: {} }));

  // Render HOC component that holds the state as props, to provide the values through children components
  render() {
    return (
      <ProjectContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleCloseDetail: this.handleCloseDetail
        }}>
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

// Create Consumer from the Context
const ProjectConsumer = ProjectContext.Consumer;

// Export the Provider and the Consumer ( this case: Project )
export { ProjectProvider, ProjectConsumer };

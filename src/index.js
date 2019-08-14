import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { ProjectProvider } from './context';
import './style/main.scss';

ReactDOM.render(
  <ProjectProvider>
    <AppRouter />
  </ProjectProvider>,
  document.getElementById('root')
);

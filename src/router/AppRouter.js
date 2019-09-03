import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navigation from '../components/Navigation/Navigation.jsx';
import HomePage from '../components/HomePage/HomePage.jsx';
import PortfolioPage from '../components/PortfolioPage/PortfolioPage.jsx';
import ProjectDetail from '../components/PortfolioPage/ProjectDetail.jsx';
import AboutPage from '../components/AboutPage/AboutPage.jsx';
import ContactPage from '../components/ContactPage/ContactPage.jsx';
import LegalPage from '../components/LegalPage/LegalPage.jsx';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage.jsx';
import WorkingPage from '../components/WorkingPage/WorkingPage.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <header>
      <Navigation />
    </header>

    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={1200} classNames='fade'>
            <Switch location={location}>
              <Route exact={true} path='/' component={HomePage} />
              <Route exact={true} path='/nosotros' component={AboutPage} />
              <Route exact={true} path='/servicios' component={WorkingPage} />
              <Route
                exact={true}
                path='/portafolio'
                component={PortfolioPage}
              />
              <Route exact={true} path='/project' component={ProjectDetail} />
              <Route exact={true} path='/contacto' component={ContactPage} />
              <Route exact={true} path='/terminos' component={LegalPage} />
              <Route exact={true} path='/privacidad' component={LegalPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </BrowserRouter>
);

export default AppRouter;

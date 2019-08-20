import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navigation = () => (
  <Navbar className="fixed-top bg-white" expand="lg">
    <Container>
      <NavLink className="navbar-brand" to="/">
        <img
          width="180"
          className="d-inline-block align-top"
          src="/images/logo2.svg"
          alt="Logo-Navigation"
        />
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div className="nav-link">
            <NavLink exact to="/">
              Home
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/nosotros">Nosotros</NavLink>
          </div>
          <div className="nav-link">
            <NavLink exact to="/servicios">
              Servicios
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink exact to="/portafolio">
              Portafolio
            </NavLink>
          </div>
          <div className="nav-link d-lg-none">
            <NavLink exact to="/contacto">
              Solicitar Cotización
            </NavLink>
          </div>
          <div className="nav-link d-none d-lg-block">
            <NavLink
              className="btn-theme btn-theme--sec font-small"
              to="/contacto">
              Solicitar Cotización
            </NavLink>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;

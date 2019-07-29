import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const InfoCTA = () => (
  <>
    <Fade bottom duration={500} delay={500} distance={'30px'}>
      <h2 className="font-big text-white mb-4">
        Llámenos ahora{' '}
        <span className="font-weight-bold">+58 426-637-4535</span> o envíe un
        correo a{' '}
        <Link className="text-white font-weight-bold" to="/contacto">
          {' '}
          <u>info@mockraft.com</u>
        </Link>
      </h2>
      <p className="text-white font-medium">
        Programe una consulta con nosotros para empezar a definir la mejor
        solucion y a llevar a cabo esa idea que tienes en mente.
      </p>
    </Fade>
  </>
);

export default InfoCTA;

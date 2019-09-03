import React, { useEffect } from 'react';
import { scrollToTop } from '../../hooks/index.js';

const ServicePage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <h1>This is the Service Page</h1>
    </div>
  );
};

export default ServicePage;

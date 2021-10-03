import React from 'react';
import Helmet from 'react-helmet';
import ResponseCheck from '../components/ResponseCheck/index';

const Response = () => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
    </Helmet>
    <ResponseCheck />
  </>
);

export default Response;

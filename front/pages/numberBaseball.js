import React from 'react';
import Helmet from 'react-helmet';
import NumberBaseball from '../components/NumberBaseball';

const Baseball = () => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
    </Helmet>
    <NumberBaseball />
  </>
);

export default Baseball;

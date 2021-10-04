import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import NavBar from '../components/Navbar';
// import backImage from '../public/astronomy-1867616.jpg';

import wrapper from '../store/configureStore';
import Footer from '../components/Footer';

const App = ({ Component }) => (
  <>  
    <NavBar />
      <Head>
          <meta charSet="utf-8" />
          <title>WebgameSite</title>
          {/* <body style={{ backgroundImage: `url(${backImage})`, backgroundImage: 'no-repeat', height: '100vh', backgroundSize: 'cover' }}></body> */}
      </Head>
      <Component style={{ position: 'relative', paddingBottom: '50px' }} />
    <Footer />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);

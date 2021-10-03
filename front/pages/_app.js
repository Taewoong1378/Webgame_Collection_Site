import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import NavBar from '../components/Navbar';

import wrapper from '../store/configureStore';

const App = ({ Component }) => (
  <>  
    <NavBar />
      <Head>
          <meta charSet="utf-8" />
          <title>WebgameSite</title>
      </Head>      
      <Component />  
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);

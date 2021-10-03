import React from 'react';
import Image from 'next/image';
import LoginForm from '../components/LoginForm';
import Logo from '../public/gameLogo.png';

const Home = () => (
  <>
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottm: '0px' }}>
    <Image width={500} height={180} src={Logo} />
  </div>
  <LoginForm />
  </>
);

export default Home;

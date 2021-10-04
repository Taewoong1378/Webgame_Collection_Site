import React from 'react';
import Image from 'next/image';
import SignupPage from '../components/SignupPage';
import Logo from '../public/gameLogo.png';

const Signup = () => (
  <>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0', padding: '20px' }}>
    <Image width={500} height={180} src={Logo} />
    </div>
    <SignupPage />
  </>
);

export default Signup;

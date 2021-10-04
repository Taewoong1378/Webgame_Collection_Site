import React from 'react';
// import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Notion from '../public/notion2.png';

const FooterStyle = styled.footer`
    width: 100%;
    height: 25px;
    background: black;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
`;

const Github = styled(FontAwesomeIcon)`
    font-size: 15px;
    color: #CDCDCD;
`;

const Instagram = styled(FontAwesomeIcon)`
    font-size: 15px;
    color: #CDCDCD;
`;

const Ul = styled.ul`
    width: 100%;
    height: 25px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    z-index: -1;
`;

const Li = styled.li`
    flex: 1;
    text-align: center;
`;

const Footer = () => (
  <>
    <FooterStyle>
      <div>
        <Ul>
          <Li>
            <a href="https://github.com/Taewoong1378" target="_blank" rel="noreferrer noopener">
              <Github icon={faGithub} />
            </a>
          </Li>
        <Li>
            <a href="https://www.instagram.com/tae_coding/" target="_blank" rel="noreferrer noopener">
              <Instagram icon={faInstagram} />
            </a>
        </Li>
        <Li>
            <a href="https://rattle-shamrock-415.notion.site/de4c948ba80f43cc97354d8089c0fc92" target="_blank" rel="noreferrer noopener">
              <Image width={15} height={15} src={Notion} />
            </a>
        </Li>
        </Ul>
      </div>
    </FooterStyle>
  </>
);

export default Footer;

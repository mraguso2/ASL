import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  /* margin: auto; */
  padding: 10px;
  background: hsla(0, 0%, 100%, 0.3);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  & div {
    max-width: 960px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 100%; */
  }
  & a {
    color: #1663c7;
  }
  & a:visited {
    color: #1663c7;
  }
`;

// hsl(212, 100%, 90%);

const Footer = () => (
  <FooterStyled>
    <div style={{ minHeight: '3rem' }}>
      © {new Date().getFullYear()}, Built with ❤️ by&nbsp;
      <a href="/">MR</a>
    </div>
  </FooterStyled>
);

export default Footer;

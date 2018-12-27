import React, { Component } from 'react';
import { Link } from '@reach/router';
import styled from '@emotion/styled';

import color from './../styles/color';
import offset from './../styles/offset';

const FooterContainer = styled.footer`
  background-color: ${color.FOOTER_BG};
  display: flex;
  padding: 10px ${offset.PADDING_COMMON};
  justify-content: center;
  align-items: center;
  height: ${offset.FOOTER_HEIGHT};

  li {
    display: inline-block;
  }

  li + li {
    margin-left: 20px;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${color.LINK};

  &:hover {
    text-decoration: underline;
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer className="footer">
        <ul className="footer__links">
          <li className="footer__link">
            <FooterLink to="/">footer link 1</FooterLink>
          </li>
          <li className="footer__link">
            <FooterLink to="/">footer link 2</FooterLink>
          </li>
          <li className="footer__link">
            <FooterLink to="/">footer link 3</FooterLink>
          </li>
        </ul>
      </FooterContainer>
    );
  }
}

export default Footer;

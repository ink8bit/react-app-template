import React, { Component } from 'react';
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

class Footer extends Component {
  render() {
    return (
      <FooterContainer className="footer">
        <ul className="footer__links">
          <li className="footer__link">footer link 1</li>
          <li className="footer__link">footer link 2</li>
          <li className="footer__link">footer link 3</li>
        </ul>
      </FooterContainer>
    );
  }
}

export default Footer;

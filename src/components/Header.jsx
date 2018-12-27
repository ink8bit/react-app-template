import React, { Component } from 'react';
import { Link } from '@reach/router';
import styled from '@emotion/styled';

import color from './../styles/color';
import offset from './../styles/offset';

const HeaderContainer = styled.header`
  background-color: ${color.HEADER_BG};
  padding: 10px ${offset.PADDING_COMMON};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    background-color: ${color.HEADER_BG};
  }

  li {
    display: inline-block;
  }

  li + li {
    margin-left: 20px;
  }
`;

const HeaderLogo = styled.img`
  background-color: ${color.HEADER_LOGO_BG};
  width: 70px;
  height: 30px;
`;

const HeaderLink = styled(Link)`
  background-color: ${color.HEADER_BG};
  text-decoration: none;
  color: lightblue;

  &:hover {
    text-decoration: underline;
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderLogo src="" alt="logo" title="logo" />
        <ul>
          <li>
            <HeaderLink to="/">Main</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/search">Search</HeaderLink>
          </li>
        </ul>
      </HeaderContainer>
    );
  }
}

export default Header;

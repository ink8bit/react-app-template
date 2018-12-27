import React, { Component } from 'react';
import { Link } from '@reach/router';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src="" alt="" className="Header__logo" />
        <ul className="header__links">
          <li className="header__link">
            <Link to="/">Main</Link>
          </li>
          <li className="header__link">
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;

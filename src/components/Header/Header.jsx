import React from 'react';
import { Link } from '@reach/router';

import s from './styles.css';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <img className={s.logo} src="" alt="logo" title="logo" />
        <ul>
          <li className={s.item}>
            <Link to="/" className={s.link}>
              Main
            </Link>
          </li>
          <li className={s.item}>
            <Link to="/search" className={s.link}>
              Search
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from '@reach/router';

import s from './styles.css';

function Footer() {
  return (
    <footer className={s.footer}>
      <ul>
        <li className={s.item}>
          <Link className={s.link} to="/">
            footer link 1
          </Link>
        </li>
        <li className={s.item}>
          <Link className={s.link} to="/">
            footer link 2
          </Link>
        </li>
        <li className={s.item}>
          <Link className={s.link} to="/">
            footer link 3
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

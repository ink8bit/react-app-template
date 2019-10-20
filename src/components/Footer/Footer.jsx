import React, { Component } from 'react';
import { Link } from '@reach/router';

import s from './styles.css';

class Footer extends Component {
  render() {
    return (
      <footer className={s.footer}>
        <ul>
          <li className={s.footerItem}>
            <Link className={s.footerLink} to="/">
              footer link 1
            </Link>
          </li>
          <li className={s.footerItem}>
            <Link className={s.footerLink} to="/">
              footer link 2
            </Link>
          </li>
          <li className={s.footerItem}>
            <Link className={s.footerLink} to="/">
              footer link 3
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;

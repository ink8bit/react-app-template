import React, { Component } from 'react';

import s from './style.css';

class Footer extends Component {
  render() {
    return (
      <footer className={s.footer}>
        <ul>
          <li className={s.footerItem}>
            <a className={s.footerLink} href="/">
              footer link 1
            </a>
          </li>
          <li className={s.footerItem}>
            <a className={s.footerLink} href="/">
              footer link 2
            </a>
          </li>
          <li className={s.footerItem}>
            <a className={s.footerLink} href="/">
              footer link 3
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;

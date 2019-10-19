/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { Component } from 'react';
import { Link } from '@reach/router';
import Loadable from 'react-loadable';

import Modal from './../Modal/Modal.jsx';
import s from './styles.css';

const Loading = () => <span>loading...</span>;
const LoadableContent = Loadable({
  loader: () => import('./../Modal/ModalContent.jsx'),
  loading: Loading,
});

class Header extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { showModal } = this.state;

    const ModalLayout = showModal ? (
      <Modal>
        <LoadableContent toggleModal={this.toggleModal} name={name} />
      </Modal>
    ) : null;

    return (
      <header className={s.header}>
        <div className={s.headerWrapper}>
          <img onClick={this.toggleModal} className={s.headerLogo} src="" alt="logo" title="logo" />
          <ul>
            <li className={s.headerItem}>
              <Link to="/" className={s.headerLink}>
                Main
              </Link>
            </li>
            <li className={s.headerItem}>
              <Link to="/search" className={s.headerLink}>
                Search
              </Link>
            </li>
            {ModalLayout}
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;

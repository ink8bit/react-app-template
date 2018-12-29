import React, { Component } from 'react';
import { Link } from '@reach/router';
import styled from '@emotion/styled';
import Loadable from 'react-loadable';

import color from '../../styles/color';
import offset from '../../styles/offset';
import Modal from './../Modal/Modal.jsx';

const HeaderContainer = styled.header`
  background-color: ${color.HEADER_BG};
  padding: 10px ${offset.PADDING_COMMON};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${offset.HEADER_HEIGHT};

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
  text-decoration: none;
  color: ${color.LINK};

  &:hover {
    text-decoration: underline;
  }
`;

const loading = () => <span>loading...</span>;
const LoadableContent = Loadable({
  loader: () => import('./../Modal/ModalContent.jsx'),
  loading,
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
      <HeaderContainer>
        <HeaderLogo onClick={this.toggleModal} src="" alt="logo" title="logo" />
        <ul>
          <li>
            <HeaderLink to="/">Main</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/search">Search</HeaderLink>
          </li>
          {ModalLayout}
        </ul>
      </HeaderContainer>
    );
  }
}

export default Header;

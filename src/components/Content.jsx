import React, { Component } from 'react';
import styled from '@emotion/styled';

import offset from './../styles/offset';

const Main = styled.main`
  padding: 10px ${offset.PADDING_COMMON};
  height: calc(100vh - ${offset.HEADER_HEIGHT} - ${offset.FOOTER_HEIGHT});
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0 0 20px;
  padding: 0;
  text-transform: capitalize;
`;

class Content extends Component {
  constructor(props) {
    super(props);

    this.message = props.message;
  }

  render() {
    return (
      <Main className="content">
        <Title>{this.props.message}</Title>
      </Main>
    );
  }
}

export default Content;

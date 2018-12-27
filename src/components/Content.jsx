import React, { Component } from 'react';
import styled from '@emotion/styled';

import offset from './../styles/offset';

const Main = styled.main`
  padding: 0 ${offset.PADDING_COMMON};
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 10px 0 20px;
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

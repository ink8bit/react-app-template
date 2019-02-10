import React, { Component } from 'react';
import styled from '@emotion/styled';

import Image from './../Image/Image.jsx';
import offset from './../../styles/offset';

const Main = styled.main`
  padding: 10px ${offset.PADDING_COMMON};
  height: calc(100% - ${offset.HEADER_HEIGHT} - ${offset.FOOTER_HEIGHT});
  display: flex;
  max-width: 1000px;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  .content__buffer {
    height: 1000px;
  }
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

        <div className="content__text">
          <p>Open network panel</p>
          <p>Scroll down</p>
          <p>You will see how images are loading</p>
          <div className="content__buffer" />
        </div>

        <ul className="content__images">
          <Image
            author="Mar Bustos"
            src="https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-1.2.1&auto=format&fit=crop&w=2765&q=80"
            websiteLink="https://unsplash.com/photos/ARVFsI-32Uk"
          />
          <Image
            author="John O'Nolan"
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            websiteLink="https://unsplash.com/photos/6f_ANCcbj3o"
          />
          <Image
            author="Thomas Lipke"
            src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2006&q=80"
            websiteLink="https://unsplash.com/photos/oIuDXlOJSiE"
          />
        </ul>
      </Main>
    );
  }
}

export default Content;

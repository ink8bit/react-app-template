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

  state = {
    downloadImage: false,
    image: {
      author: 'Mar Bustos',
      src:
        'https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-1.2.1&auto=format&fit=crop&w=2765&q=80',
      link: 'https://unsplash.com/photos/ARVFsI-32Uk',
    },
  };

  componentDidMount() {
    const content = document.querySelector('.content__images');

    if ('IntersectionObserver' in window) {
      let lazyImageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.setState({
              downloadImage: true,
            });
          }
        });
      });

      lazyImageObserver.observe(content);
    }
  }

  render() {
    const { image: { link, author, src } = {}, downloadImage } = this.state;

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
          {downloadImage ? <Image src={src} websiteLink={link} author={author} /> : 'no image'}
        </ul>
      </Main>
    );
  }
}

export default Content;

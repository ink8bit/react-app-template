import React, { Component } from 'react';
import styled from '@emotion/styled';

import color from './../../styles/color';

const ImageContainer = styled.li`
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 50px;

  img {
    width: 100%;
    background: lightgray;
  }

  .image__link {
    color: ${color.LINK};
  }

  .image__info {
    display: flex;
    align-items: baseline;
    margin-top: 10px;
  }

  .image__author {
    margin: 0;
  }

  .image__author + .image__link {
    margin-left: 10px;
  }
`;

class Image extends Component {
  render() {
    return (
      <ImageContainer>
        <img className="image" src={this.props.src} alt="" />
        <div className="image__info">
          <p className="image__author">{this.props.author}</p>
          <a
            href={this.props.websiteLink}
            title="unsplash.com link"
            target="_blank"
            rel="noopener noreferrer"
            className="image__link"
          >
            Unsplash link
          </a>
        </div>
      </ImageContainer>
    );
  }
}

export default Image;

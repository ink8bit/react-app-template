import React, { Component } from 'react';
import classNames from 'classnames';

import s from './styles.css';

class Image extends Component {
  render() {
    return (
      <li className={s.imageContainer}>
        <img className={classNames(s.image, 'lazy')} src="" data-src={this.props.src} alt="" />

        <div className={s.imageInfo}>
          <p className={s.imageAuthor}>{this.props.author}</p>
          <a
            href={this.props.websiteLink}
            title="unsplash.com link"
            target="_blank"
            rel="noopener noreferrer"
            className={s.imageLink}
          >
            Unsplash link
          </a>
        </div>
      </li>
    );
  }
}

export default Image;

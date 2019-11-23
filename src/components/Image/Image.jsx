import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import s from './styles.css';

function Image(props) {
  const { src, author, websiteLink } = props;

  return (
    <>
      {src ? (
        <img className={classNames(s.image, 'lazy')} src="" data-src={src} alt="" />
      ) : (
        <div className={s.fallback} />
      )}

      <div className={s.info}>
        <p className={s.author}>{author}</p>
        <a
          href={websiteLink}
          title="unsplash.com link"
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >
          Unsplash link
        </a>
      </div>
    </>
  );
}

Image.defaultPropTypes = {
  websiteLink: ''
};

Image.propTypes = {
  websiteLink: PropTypes.string,
  author: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Image;

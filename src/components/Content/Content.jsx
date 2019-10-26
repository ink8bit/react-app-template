import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from './../Image/Image.jsx';
import s from './styles.css';

class Content extends Component {
  constructor(props) {
    super(props);

    this.message = props.message;
  }

  render() {
    return (
      <main className={s.content}>
        <h1 className={s.contentTitle}>{this.props.message}</h1>

        <div>
          <p>Open network panel</p>
          <p>Scroll down</p>
          <p>You will see how images are loading</p>
          <div className={s.contentBuffer} />
        </div>

        <ul>
          <Image
            src="https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-1.2.1&auto=format&fit=crop&w=2765&q=80"
            websiteLink="https://unsplash.com/@mar28mar"
            author="Mar Bustos"
          />
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            websiteLink="https://unsplash.com/@johnonolan"
            author="John O'Nolan"
          />
          <Image
            src="https://images.unsplash.com/photo-1516898263-bc9e1a4e7e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
            websiteLink="https://unsplash.com/@callumstewartni"
            author="Callum Stewart"
          />
        </ul>
      </main>
    );
  }
}

Content.defaultProps = {
  message: ''
};

Content.propTypes = {
  message: PropTypes.string
};

export default Content;

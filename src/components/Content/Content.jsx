import React, { Suspense, useState } from 'react';
import PropTypes from 'prop-types';

import Image from './../Image/Image.jsx';
import s from './styles.css';
import Modal from './../Modal/Modal.jsx';

const LoadableContent = React.lazy(() => import('./../Modal/ModalContent.jsx'));

const images = [
  {
    src: '',
    websiteLink: '',
    author: 'Unknown'
  },
  {
    src:
      'https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-1.2.1&auto=format&fit=crop&w=2765&q=80',
    websiteLink: 'https://unsplash.com/@mar28mar',
    author: 'Mar Bustos'
  },
  {
    src:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
    websiteLink: 'https://unsplash.com/@johnonolan',
    author: "John O'Nolan"
  },
  {
    src:
      'https://images.unsplash.com/photo-1516898263-bc9e1a4e7e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80',
    websiteLink: 'https://unsplash.com/@callumstewartni',
    author: 'Callum Stewart'
  }
];

function Content(props) {
  const [isModalVisible, setModalVisible] = useState(false);

  const { message } = props;

  const imageList = images.map(image => {
    const { src, websiteLink, author } = image;
    return (
      <li key={src} className={s.image}>
        <Image src={src} websiteLink={websiteLink} author={author} />
      </li>
    );
  });

  return (
    <main className={s.content}>
      <h1 className={s.title}>{message}</h1>

      <button
        className={s.button}
        type="button"
        onClick={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        Show modal
      </button>

      {isModalVisible && (
        <Modal>
          <Suspense fallback={<div>Loading...</div>}>
            <LoadableContent setModalVisible={setModalVisible} />
          </Suspense>
        </Modal>
      )}

      <div>
        <p>Open network panel</p>
        <p>Scroll down</p>
        <p>You will see how images are loading</p>
        <div className={s.buffer} />
      </div>

      <ul>{imageList}</ul>
    </main>
  );
}

Content.defaultProps = {
  message: ''
};

Content.propTypes = {
  message: PropTypes.string
};

export default Content;

import React from 'react';
import PropTypes from 'prop-types';

import s from './styles.css';

function ModalContent(props) {
  const { setModalVisible } = props;

  return (
    <div className={s.container}>
      <h1 className={s.title}>This is an example of a modal window</h1>
      <div className={s.buttons}>
        <button
          className={s.button}
          type="button"
          onClick={() => {
            setModalVisible(false);
          }}
        >
          Ok
        </button>

        <button
          className={s.button}
          type="button"
          onClick={() => {
            setModalVisible(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

ModalContent.propTypes = {
  setModalVisible: PropTypes.func.isRequired,
};

export default ModalContent;

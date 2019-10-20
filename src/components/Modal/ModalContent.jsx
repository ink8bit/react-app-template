import React from 'react';

import s from './styles.css';

const ModalContent = props => (
  <div className={s.modalContainer}>
    <h1 className={s.modalTitle}>This is an example of a modal window</h1>
    <div className={s.modalButtons}>
      <button className={s.modalButton} onClick={props.toggleModal}>
        Ok
      </button>
      <button className={s.modalButton} onClick={props.toggleModal}>
        Close
      </button>
    </div>
  </div>
);

export default ModalContent;

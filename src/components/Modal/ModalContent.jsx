import React from 'react';
import styled from '@emotion/styled';

import color from '../../styles/color';
import offset from '../../styles/offset';

const ModalContainer = styled.div`
  background: ${color.MODAL_BG};
  color: ${color.MODAL_TEXT};
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 300px;
  height: 200px;
  padding: ${offset.PADDING_COMMON};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;

  h1 {
    font-size: 20px;
  }

  .buttons {
    display: flex;
    align-self: flex-end;
  }

  .button {
    padding: 4px 8px;
    border-radius: 4px;
    flex-shrink: 0;
    cursor: pointer;

    &:hover {
      box-shadow: 1px 1px 1px 1px ${color.MODAL_BUTTON_SHADOW};
    }
  }

  .button + .button {
    margin-left: 10px;
  }
`;

const ModalContent = props => (
  <ModalContainer>
    <h1>This is an example of a modal window</h1>
    <div className="buttons">
      <button className="button" onClick={props.toggleModal}>
        Ok
      </button>
      <button className="button" onClick={props.toggleModal}>
        Close
      </button>
    </div>
  </ModalContainer>
);

export default ModalContent;

import React from 'react';
import { create } from 'react-test-renderer';

import ModalContent from './../ModalContent.jsx';

test('snapshot', () => {
  const c = create(<ModalContent toggleModal />);
  expect(c.toJSON()).toMatchSnapshot();
});

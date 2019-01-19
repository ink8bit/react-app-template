import React from 'react';
import { create } from 'react-test-renderer';

import ModalContent from './../ModalContent.jsx';

test('snapshot', () => {
  const c = create(<ModalContent />);
  expect(c.toJSON()).toMatchSnapshot();
});

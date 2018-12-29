import React from 'react';
import { create } from 'react-test-renderer';

import Content from './../Content.jsx';

test('snapshot', () => {
  const c = create(<Content />);
  expect(c.toJSON()).toMatchSnapshot();
});

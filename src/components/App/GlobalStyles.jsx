import React, { Component } from 'react';
import { Global, css } from '@emotion/core';

import color from './../../styles/color';

class GlobalStyles extends Component {
  render() {
    return (
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          html,
          body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
            padding: 0;
            background-color: ${color.PRIMARY_BG};
            color: ${color.PRIMARY};
          }
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            background: transparent;
          }
        `}
      />
    );
  }
}

export default GlobalStyles;

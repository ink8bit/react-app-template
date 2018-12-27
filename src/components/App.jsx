import React, { Component } from 'react';
import { Router } from '@reach/router';
import { Global, css } from '@emotion/core';

import color from './../styles/color';

import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Global
          styles={css`
            * {
              background-color: ${color.PRIMARY_BG};
              color: ${color.PRIMARY};
              font-family: Arial, Helvetica, sans-serif;
              margin: 0;
              padding: 0;
            }
          `}
        />
        <Header />
        <Router>
          <Content path="/" message="main" />
          <Content path="/search" message="search" />
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

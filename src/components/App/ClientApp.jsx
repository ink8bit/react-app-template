import React, { Component } from 'react';
import { Router } from '@reach/router';

import GlobalStyles from './GlobalStyles.jsx';

import Header from './../../components/Header/Header.jsx';
import Content from './../Content/Content.jsx';
import Footer from './../Footer/Footer.jsx';

import './../../utils/lazy-loading';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
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

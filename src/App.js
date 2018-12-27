import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';

import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Content path="/" message="main page" />
          <Content path="/search" message="search page" />
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));

import React from 'react';
import { Router } from '@reach/router';

import './styles.css';
import Header from './../../components/Header/Header.jsx';
import Content from './../Content/Content.jsx';
import Footer from './../Footer/Footer.jsx';
import './../../utils/lazy-loading';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Content path="/" message="main" />
        <Content path="/search" message="search" />
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;

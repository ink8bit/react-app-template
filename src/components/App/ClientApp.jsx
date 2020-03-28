import React from 'react';
import { Router } from '@reach/router';

import s from './styles.css';
import Header from './../../components/Header/Header.jsx';
import Content from './../Content/Content.jsx';
import Footer from './../Footer/Footer.jsx';
import './../../utils/lazy-loading';

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.mainContent}>
        <Router>
          <Content path="/" message="main" />
          <Content path="/search" message="search" />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

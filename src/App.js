import React, { Component } from 'react';
// eslint-disable-next-line
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;

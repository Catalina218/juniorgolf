import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation'

import Home from './pages/Home/Home';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Navigation/>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;

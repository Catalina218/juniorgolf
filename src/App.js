import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBreadcrumb from './components/NavBreadcrumb/NavBreadcrumb'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBreadcrumb/>
        <BrowserRouter>
          
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;

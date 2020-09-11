import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
// import ContactCard from './components/ContactCard/ContactCard';

import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
import ContactUs from './pages/About/ContactUs';
import Clinics from './pages/Clinics/Clinics';
import Coach from './pages/Team/Coach';
import Advisor from './pages/Team/Advisor';
import Message from './pages/Message/Message';
import Partners from './pages/Partners/Partners';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <div className="app-content">
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/about_us" exact component={AboutUs} />
          <Route path="/contact_us" exact component={ContactUs} />
          <Route path="/clinics" exact component={Clinics} />
          <Route path="/coach" exact component={Coach} />
          <Route path="/advisor" exact component={Advisor} />
          <Route path="/message" exact component={Message} />
          <Route path="/partners" exact component={Partners} />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;

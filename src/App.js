
import './App.css';


import HomePageDesign from './pages/HomePageDesign';
import HomePageEngineering from './pages/HomePageEngineering';
import About from './pages/About';
import Resume from './pages/Resume';
import DesignWork from './pages/DesignWork';
import EngineeringWork from './pages/EngineeringWork';

import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import ScrollToTopRoute from './components/ScrollToTopRoute';

class App extends Component {
  render(){
    return (
      <HashRouter>
          <Navbar />

          <Routes>
            <Route path="/" element ={<HomePageDesign/>} exact />
            <Route path="/work" element ={<DesignWork/>} exact />
            {/*<Route path="/about" element ={<About/>} exact />
            <Route path="/resume" element ={<Resume/>} exact />*/}

            <Route path="/design" element ={<HomePageDesign/>} exact />
            <Route path="/design-work" element ={<DesignWork/>} exact />

            <Route path="/engineering" element ={<HomePageEngineering/>} exact />
            {/*<Route path="/engineering-work" element ={<EngineeringWork/>} exact /> */}
          </Routes>
      </HashRouter>
    );
  }
}

export default App;

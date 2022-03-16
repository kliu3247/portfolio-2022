
import './App.css';


import HomePageDesign from './pages/design/HomePageDesign';
import HomePageEngineering from './pages/engineering/HomePageEngineering';
import About from './pages/About';
import Resume from './pages/Resume';
import DesignWork from './pages/design/DesignWork';
import EngineeringWork from './pages/engineering/EngineeringWork';

import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


class App extends Component {
  render(){
    return (
      <HashRouter>
          <Navbar />
          <Sidebar />

          <Routes>
            <Route path="/" element ={<HomePageDesign/>} exact />
            <Route path="/work" element ={<DesignWork/>} exact />
            {/*<Route path="/about" element ={<About/>} exact />
            <Route path="/resume" element ={<Resume/>} exact />*/}

            <Route path="/design" element ={<HomePageDesign/>} exact />
            <Route path="/design-work" element ={<DesignWork/>} exact />

            <Route path="/engineering" element ={<HomePageEngineering/>} exact />
            <Route path="/engineering-work" element ={<EngineeringWork/>} exact /> 
          </Routes>
      </HashRouter>
    );
  }
}

export default App;

// import logo from './logo.svg';
import './App.css';
import About from './components/About';
// import Color from './components/Color';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Counter from './components/Counter.js';
import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light')
  const [colorHandler, setColorHandler] = useState('dark')
  const [labelHandler, setLabelHandler] = useState('Enable DarkMode')
  const [areacolorHandler, settextAreacolorHandler] = useState('light')
  const [formColorr, setformColorr] = useState('dark')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setColorHandler('white')
      setLabelHandler('Disable DarkMode')
      document.body.style.backgroundColor = '#030e1e'
      settextAreacolorHandler('secondary')
      setformColorr('light')

    }
    else {
      setMode('light')
      setColorHandler('dark')
      setLabelHandler('Enable DarkMode')
      document.body.style.backgroundColor = 'white'
      settextAreacolorHandler('light')
      setformColorr('dark')

    }


  }
  return (
    <>
    <Router>
        <Navbar title="TextUtils" about="About" Mode={mode} toggler={toggleMode} color={colorHandler} label={labelHandler} />
      
      <div className="container">
      <Switch>
          <Route exact path="/">
          <TextForm heading="Enter the text here to analyze:" areaColor={areacolorHandler} formColor={formColorr} />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
          

        </Switch>

      </div>
      </Router>
    </>
  );
}

export default App;

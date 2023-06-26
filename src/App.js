import logo from './logo.svg';
import './App.css';
import React from 'react'

// importing like this to reduce lines of imports
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';


const App = () => {
  return (
    <div className='App'>
      <h1>GPT-3</h1>
  

     <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default App


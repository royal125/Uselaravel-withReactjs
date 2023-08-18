import React, { Component } from 'react'
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import { BrowserRouter, Route,Routes } from 'react-router-dom'

class App extends Component {
  render () {
    return (
     
        <div>
          <Home />
         <Routes>
            <Route exact path='/about' element={<About/>} />
            
            </Routes>
        </div>
   
    )
  }
}

const appRoot = document.getElementById('app');

if (appRoot) {
  createRoot(appRoot).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

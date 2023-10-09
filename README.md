# Uselaravel-withReactjs
how to use laravel with reacrjs



import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
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

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
<App />
</BrowserRouter>
);






LARAVEL CSRF TOKEN MISMATCH SOLUTION.

go to Verifycsrftoken.php

add 

 protected $except = [
 'api/*',
    ];


Install reactjs with laravel

composer create-project laravel/laravel laravelreactjs
cd example-app
2- Install Breeze starter kit for React (includes Inertia):

composer require laravel/breeze --dev
php artisan breeze:install react
3- Run the project (dev mode):

In 1st terminal (Laravel): php artisan serve

And in 2nd one (Vite): npm run dev

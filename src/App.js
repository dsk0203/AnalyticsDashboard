
import React from 'react'
import { Router } from '@reach/router'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import ResponsiveNavigation from './components/ResponsiveNavigation'
import './scss/base.scss'
import Home from './pages/Home'
import DashboardSelector from './pages/DashboardSelector'


function App() {

  const navLinks = [
    {
    text: 'Home',
    path: '/',
    icon: 'ion-ios-home'
    },
    {
      text: 'Analytics',
      path: '/analytics',
      icon: 'ion-ios-analytics'
    }
  ]

  return (
    <div className="App">
      <ResponsiveNavigation
          navLinks= { navLinks }
          logl = { logo }
          background="#fff"
          hoverbackground = "#ddd"
          linkColor= "#777"
          />
      <Router>
        <Home path="/" />
        <DashboardSelector path="/analytics" axios={axios}  />
      </Router>
    </div>
  );
}

export default App;

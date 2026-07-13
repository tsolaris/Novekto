import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

/*
  When the site is SERVED (dev server or a real host) we use BrowserRouter
  for clean URLs like /privacy. When the file is opened directly from disk
  (file://), we fall back to HashRouter so routing still works on double-click.
*/
const Router = typeof window !== 'undefined' && window.location.protocol === 'file:'
  ? HashRouter
  : BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)

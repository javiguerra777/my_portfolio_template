import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.scss'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);


// Credit to https://pixabay.com/vectors/avatar-icon-placeholder-profile-3814081/ for the placeholder avatar icon
// Credit to https://pixabay.com/photos/sky-mountains-peak-snow-background-8763986/ for the placeholder background image
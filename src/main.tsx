import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/NavigationBar/NavigationBar'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Launches">
      <NavbarComponent />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

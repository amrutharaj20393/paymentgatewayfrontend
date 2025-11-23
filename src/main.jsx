import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextShare from './context/ContextShare.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { GoogleOAuthProvider } from '@react-oauth/google'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContextShare>
       <GoogleOAuthProvider clientId="1048539211570-o5afc4b9lfp39e91c3eecj3aj5062a3q.apps.googleusercontent.com"> <App /></GoogleOAuthProvider>
      </ContextShare>

    </BrowserRouter>

  </StrictMode>,
)

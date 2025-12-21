import React from 'react'
import ReactDOM from 'react-dom/client'
// Ensure that App.tsx exists in the same directory, or update the path if the file is named differently or located elsewhere.
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

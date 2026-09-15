import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

// Temporary build identifier — distinguishes this deployment from the stale
// published artifact. Verifiable in the published JS bundle via grep.
window.__EO_BUILD_ID__ = __EO_BUILD_ID__;

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
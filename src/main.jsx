import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n'; // Import i18n configuration

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.Suspense fallback={<div className="bg-void-black h-screen w-full flex items-center justify-center text-white">Loading...</div>}>
      <App />
    </React.Suspense>
  </StrictMode>,
)

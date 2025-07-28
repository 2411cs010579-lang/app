import { StrictMode } from 'react';        // <-- Add this import
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import CulturistApp from './Culturist.jsx';
// import LandingPage from './LandingPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <CulturistApp /> */}
    {/* <LandingPage /> */}
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app';

const root = ReactDOM.createRoot(document.getElementById('root')); // hook to id='root' element
root.render(<App />); // fill hooked element w/ App component (./src/app.jsx)

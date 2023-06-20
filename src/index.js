import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/serviceWorker.js');
      console.log('Service worker register success')
    } catch (err) {
      console.log('Service worker register error')
      console.log('err', err)
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

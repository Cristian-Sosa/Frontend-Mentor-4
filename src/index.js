import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/dist/index.css';
import Main from './components/Main';
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <Header />
    <Main />
  </React.StrictMode>
);

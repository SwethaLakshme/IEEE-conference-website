import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home';
import Advisorycommittee from './components/Advisorycommittee'
import Datestoremember from './components/Datestoremember';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Advisorycommittee />
    <Datestoremember />
  </React.StrictMode>
);



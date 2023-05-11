import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login';
import Navegacao from './components/Navegacao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navegacao/>
    <Login/>
  </>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Area from './pages/Area';
import Passar from './pages/Passar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/area' element={<Area/>} />
        <Route path='/passagem' element={<Passar/>} />
      </Routes>
    </BrowserRouter>
  </>
);

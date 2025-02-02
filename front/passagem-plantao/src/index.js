import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Area from './pages/Area';
import Passar from './pages/Passar';
import Listar from './pages/Listar';
import MeusPlantoes from './pages/MeusPlantoes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='back-ground'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/area' element={<Area/>} />
        <Route path='/passagem' element={<Passar/>} />
        <Route path='/listagem' element={<Listar/>} />
        <Route path='/meusplatoes' element={<MeusPlantoes/>} />
      </Routes>
    </BrowserRouter>
  </div>
);

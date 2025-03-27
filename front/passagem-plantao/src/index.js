import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Area from './pages/Area';
import Passar from './pages/Passar';
import Listar from './pages/Listar';
import Detalhes from './pages/Detalhes';
import MeusPlantoes from './pages/MeusPlantoes';
import Cadastro from './pages/Cadastro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='back-ground'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/area' element={<Area/>} />
        <Route path='/passagem' element={<Passar/>} />
        <Route path='/listagem' element={<Listar/>} />
        <Route path='/meusplantoes' element={<MeusPlantoes/>} />
        <Route path='/detalhes/:id' element={<Detalhes/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
      </Routes>
    </BrowserRouter>
  </div>
);

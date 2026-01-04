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
import ProtectedRoute from './routes/ProtectedRoute';
import Erro from './pages/Erro';
import { AuthProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='back-ground'>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/area' element={<><Area/></>} />
          <Route path='/passagem' element={<ProtectedRoute><Passar/></ProtectedRoute>} />
          <Route path='/listagem' element={<ProtectedRoute><Listar/></ProtectedRoute>} />
          <Route path='/meusplantoes' element={<ProtectedRoute><MeusPlantoes/></ProtectedRoute>} />
          <Route path='/detalhes/:id' element={<ProtectedRoute><Detalhes/></ProtectedRoute>} />
          <Route path='/cadastro' element={<ProtectedRoute><Cadastro/></ProtectedRoute>} />
          <Route path='/erro' element={<Erro/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </div>
);

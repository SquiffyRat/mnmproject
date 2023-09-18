import './App.css';
import HomePage from './page/HomePage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LengthPage from './page/LengthPage';
import MassPage from './page/MassPage';
import VolumePage from './page/VolumePage';
import ExchangePage from './page/ExchangePage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/LengthPage' element={<LengthPage />} />
        <Route path='/MassPage' element={<MassPage />} />
        <Route path='/VolumePage' element={<VolumePage />} />
        <Route path='/ExchangePage' element={<ExchangePage />} />
      </Routes>
    </div>
  );
}

export default App;

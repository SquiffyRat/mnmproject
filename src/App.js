import './App.css';
import HomePage from './page/HomePage';
import React, { useReducer, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LengthPage from './page/LengthPage';
import MassPage from './page/MassPage';
import VolumePage from './page/VolumePage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/LengthPage' element={<LengthPage />} />
        <Route path='/MassPage' element={<MassPage />} />
        <Route path='/VolumePage' element={<VolumePage />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import HomePage from './page/HomePage';
import React, { useReducer, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LengthCalculator from './page/LengthCalculator';
import MassCalculator from './page/MassCalculator';
import VolumeCalculator from './page/VolumeCalculator';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/LengthCalculator' element={<LengthCalculator />} />
        <Route path='/MassCalculator' element={<MassCalculator />} />
        <Route path='/VolumeCalculator' element={<VolumeCalculator />} />
      </Routes>
    </div>
  );
}

export default App;

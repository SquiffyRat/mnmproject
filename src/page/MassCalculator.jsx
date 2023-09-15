import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MassCalculator() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/HomePage');
  };
  const goLength = () => {
    navigate('/LengthCalculator');
  };
  const goMass = () => {
    navigate('/MassCalculator');
  };
  const goVolume = () => {
    navigate('/VolumeCalculator');
  };

  const [option, setOption] = useState('');
  const handleOnChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <div>
      <select value={option} id='massOption' onChange={handleOnChange}>
        <option key={'ounce'}>ounce</option>
        <option key={'pound'}>pound</option>
        <option key={'longTon'}>longTon</option>
        <option key={'shortTon'}>shortTon</option>
        <option key={'troyOunce'}>troyOunce</option>
      </select>
    </div>
  );
}

export default MassCalculator;

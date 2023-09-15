import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LengthCalculator() {
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

  useEffect(() => {}, []);
  // const resultValue =

  return (
    <div>
      <select value={option} id='lengthOption' onChange={handleOnChange}>
        <option key={'inch'}>inch</option>
        <option key={'foot'}>foot</option>
        <option key={'yard'}>yard</option>
        <option key={'chain'}>chain</option>
        <option key={'furlong'}>furlong</option>
        <option key={'mile'}>mile</option>
      </select>
    </div>
  );
}

export default LengthCalculator;
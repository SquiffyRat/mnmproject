import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VolumeCalculator() {
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
      <select value={option} id='volumeOption' onChange={handleOnChange}>
        <option key={'dryPint'}>dryPint</option>
        <option key={'dryQuart'}>dryQuart</option>
        <option key={'pint'}>pint</option>
        <option key={'gallon'}>gallon</option>
      </select>
    </div>
  );
}

export default VolumeCalculator;

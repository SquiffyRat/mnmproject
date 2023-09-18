import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import './ButtonBar.css';

function ButtonBar() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  const goLength = () => {
    navigate('/LengthPage');
  };
  const goMass = () => {
    navigate('/MassPage');
  };
  const goVolume = () => {
    navigate('/VolumePage');
  };

  return (
    <div>
      <Button title={'Home'} onClick={goHome} />
      <Button title={'길이'} onClick={goLength} />
      <Button title={'질량'} onClick={goMass} />
      <Button title={'부피'} onClick={goVolume} />
    </div>
  );
}

export default ButtonBar;

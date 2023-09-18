import React from 'react';
import Button from './Button';
import { useNavigate, useLocation } from 'react-router-dom';
import './ButtonBar.css';

function ButtonBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentLocation = location.pathname;

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
  const goExchange = () => {
    navigate('/ExchangePage');
  };

  return (
    <div>
      <Button
        title={'Home'}
        onClick={goHome}
        disabled={currentLocation === '/'}
      />
      <Button
        title={'길이'}
        onClick={goLength}
        disabled={currentLocation === '/LengthPage'}
      />
      <Button
        title={'질량'}
        onClick={goMass}
        disabled={currentLocation === '/MassPage'}
      />
      <Button
        title={'부피'}
        onClick={goVolume}
        disabled={currentLocation === '/VolumePage'}
      />
      <Button
        title={'환전'}
        onClick={goExchange}
        disabled={currentLocation === '/ExchangePage'}
      />
    </div>
  );
}

export default ButtonBar;

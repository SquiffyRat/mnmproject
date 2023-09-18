import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';

// dry good과 fluid 차이는 여건이 되면 description 작성, 기준 단위는 mL(cc)~L
function VolumePage() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/HomePage');
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
    <div className='VolumeConverter'>
      <section>
        <Header />
        <ButtonBar />
      </section>
      <section></section>
    </div>
  );
}

export default VolumePage;

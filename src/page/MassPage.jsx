import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';
import MassSelector from '../component/MassSelector';

// gram~ton 단위 추가하기
function MassPage() {
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
    <div className='MassConverter'>
      <section>
        <Header />
        <ButtonBar />
      </section>
      <section>
        <MassSelector />
        <MassSelector />
      </section>
    </div>
  );
}

export default MassPage;

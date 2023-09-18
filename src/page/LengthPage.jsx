import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';

// mm~Km 단위도 추가하기
function LengthPage() {
  const lengthTitle = '길이 변환';

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
    <div className='LengthConverter'>
      <section>
        <Header title={lengthTitle} summary={'길이 변환 설명'} />
        <ButtonBar />
      </section>
      <section>
        <div></div>
      </section>
    </div>
  );
}

export default LengthPage;

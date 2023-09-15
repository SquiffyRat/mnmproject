import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';

// gram~ton 단위 추가하기
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
    <div className='MassConverter'>
      <section>
        <Header />
        <ButtonBar />
      </section>
      <section>
        <select value={option} id='massOption' onChange={handleOnChange}>
          <option key={'ounce'}>ounce</option>
          <option key={'pound'}>pound</option>
          <option key={'longTon'}>longTon</option>
          <option key={'shortTon'}>shortTon</option>
          <option key={'troyOunce'}>troyOunce</option>
        </select>
      </section>
    </div>
  );
}

export default MassCalculator;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';

// dry good과 fluid 차이는 여건이 되면 description 작성, 기준 단위는 mL(cc)~L
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
    <div className='VolumeConverter'>
      <section>
        <Header />
        <ButtonBar />
      </section>
      <section>
        <select value={option} id='volumeOption' onChange={handleOnChange}>
          <option key={'dryPint'}>dryPint</option>
          <option key={'dryQuart'}>dryQuart</option>
          <option key={'pint'}>pint</option>
          <option key={'gallon'}>gallon</option>
        </select>
      </section>
    </div>
  );
}

export default VolumeCalculator;

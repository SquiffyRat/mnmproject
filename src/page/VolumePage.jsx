import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';
import UnitSelector from '../component/UnitSelector';
import InputNum from '../component/InputNum';
import OutputNum from '../component/OutputNum';

// dry good과 fluid 차이는 여건이 되면 description 작성, 기준 단위는 mL(cc)~L
function VolumePage() {
  const volumeOptionIn = [
    { id: 'milliliter', label: '밀리리터', value: 1.0 },
    { id: 'liter', label: '리터', value: 1000.0 },
    { id: 'uspint', label: '갤런', value: 473.2 },
    { id: 'usgallon', label: '파인트', value: 3785.412 },
    { id: 'imppint', label: '제국파인트', value: 568.3 },
    { id: 'impgallon', label: '제국갤런', value: 4546.09 },
  ];
  const volumeOptionOut = [
    { id: 'milliliter', label: '밀리리터', value: 1.0 },
    { id: 'liter', label: '리터', value: 1000.0 },
    { id: 'uspint', label: '갤런', value: 473.2 },
    { id: 'usgallon', label: '파인트', value: 3785.412 },
    { id: 'imppint', label: '제국파인트', value: 568.3 },
    { id: 'impgallon', label: '제국갤런', value: 4546.09 },
  ];

  const [inputNum, setInputNum] = useState('');
  const [inputVolume, setInputVolume] = useState(1.0);
  const [outputVolume, setOutputVolume] = useState(1.0);
  const [result, setResult] = useState('');
  const [inUnit, setInUnit] = useState('밀리리터');
  const [outUnit, setOutUnit] = useState('밀리리터');

  useEffect(() => {
    if (inputNum !== '' && inputVolume !== '' && outputVolume !== '') {
      const parsedInputNum = parseFloat(inputNum);
      const parsedInputVolume = parseFloat(inputVolume);
      const parsedOutputVolume = parseFloat(outputVolume);

      setResult((parsedInputNum * parsedInputVolume) / parsedOutputVolume);
    } else {
      setResult('');
    }
  }, [inputNum, inputVolume, outputVolume]);

  const handleInputNum = (e) => {
    setInputNum(e.target.value);
  };
  const handleSetInputVolume = (e) => {
    setInputVolume(e.target.value);
  };

  const handleInputUnit = (e) => {
    setInUnit(e.target.options[e.target.options.selectedIndex].innerText);
  };

  const handleInputVolume = (e) => {
    handleSetInputVolume(e);
    handleInputUnit(e);
  };

  const handleSetOutputVolume = (e) => {
    setOutputVolume(e.target.value);
  };

  const handleOutputUnit = (e) => {
    setOutUnit(e.target.options[e.target.options.selectedIndex].innerText);
  };
  const handleOutputVolume = (e) => {
    handleSetOutputVolume(e);
    handleOutputUnit(e);
  };

  return (
    <div className='converter'>
      <section className='converterTop'>
        <Header />
        <ButtonBar />
      </section>
      <section>
        <InputNum value={inputNum} onChange={handleInputNum} inUnit={inUnit} />
      </section>
      <section>
        <UnitSelector
          units={volumeOptionIn}
          value={inputVolume}
          onChange={handleInputVolume}
        />
        <UnitSelector
          units={volumeOptionOut}
          value={outputVolume}
          onChange={handleOutputVolume}
        />
      </section>
      <section>
        <OutputNum getResult={result} outUnit={outUnit} />
      </section>
    </div>
  );
}

export default VolumePage;

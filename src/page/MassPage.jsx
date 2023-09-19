import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';
import UnitSelector from '../component/UnitSelector';
import InputNum from '../component/InputNum';

// gram~ton 단위 추가하기
function MassPage() {
  const [inputNum, setInputNum] = useState('');
  const [inputMass, setInputMass] = useState('');
  const [outputMass, setOutputMass] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (inputNum !== '' && inputMass !== '' && outputMass !== '') {
      const parsedInputNum = parseFloat(inputNum);
      const parsedInputMass = parseFloat(inputMass);
      const parsedOutputMass = parseFloat(outputMass);

      setResult((parsedInputNum * parsedInputMass) / parsedOutputMass);
    } else {
      setResult('');
    }
  }, [inputNum, inputMass, outputMass]);

  const handleInputNum = (e) => {
    setInputNum(e.target.value);
  };
  const handleInputMass = (e) => {
    setInputMass(e.target.value);
  };
  const handleOutputMass = (e) => {
    setOutputMass(e.target.value);
  };

  const massOptionIn = [
    { id: 'gram', label: '그램', value: 1.0 },
    { id: 'kilogram', label: '킬로그램', value: 1000.0 },
    { id: 'ton', label: '톤', value: 1000000.0 },
    { id: 'ounce', label: '온스', value: 28.35 },
    { id: 'pound', label: '파운드', value: 453.6 },
    { id: 'longton', label: '롱톤', value: 1016046.9088 },
    { id: 'shortton', label: '숏톤', value: 917184.74 },
  ];
  const massOptionOut = [
    { id: 'gram', label: '그램', value: 1.0 },
    { id: 'kilogram', label: '킬로그램', value: 1000.0 },
    { id: 'ton', label: '톤', value: 1000000.0 },
    { id: 'ounce', label: '온스', value: 28.35 },
    { id: 'pound', label: '파운드', value: 453.6 },
    { id: 'longton', label: '롱톤', value: 1016046.9088 },
    { id: 'shortton', label: '숏톤', value: 917184.74 },
  ];

  return (
    <div className='MassConverter'>
      <section>
        <Header />
        <ButtonBar />
      </section>
      <section>
        <InputNum value={inputNum} onChange={handleInputNum} />
      </section>
      <section>
        <UnitSelector
          units={massOptionIn}
          value={inputMass}
          onChange={handleInputMass}
        />
        <UnitSelector
          units={massOptionOut}
          value={outputMass}
          onChange={handleOutputMass}
        />
      </section>
      <section>{result}</section>
    </div>
  );
}

export default MassPage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';
import UnitSelector from '../component/UnitSelector';
import InputNum from '../component/InputNum';
import OutputNum from '../component/OutputNum';
import '../component/Page.css';

// gram~ton 단위 추가하기
function MassPage() {
  document.title = '단위 변환 - 질량';
  const massTitle = '단위 변환 - 질량';

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

  const [inputNum, setInputNum] = useState('');
  const [inputMass, setInputMass] = useState(1.0);
  const [outputMass, setOutputMass] = useState(1.0);
  const [result, setResult] = useState('');
  const [inUnit, setInUnit] = useState('그램');
  const [outUnit, setOutUnit] = useState('그램');

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
  const handleSetInputMass = (e) => {
    setInputMass(e.target.value);
  };

  const handleInputUnit = (e) => {
    setInUnit(e.target.options[e.target.options.selectedIndex].innerText);
  };

  const handleInputMass = (e) => {
    handleSetInputMass(e);
    handleInputUnit(e);
  };

  const handleSetOutputMass = (e) => {
    setOutputMass(e.target.value);
  };

  const handleOutputUnit = (e) => {
    setOutUnit(e.target.options[e.target.options.selectedIndex].innerText);
  };
  const handleOutputMass = (e) => {
    handleSetOutputMass(e);
    handleOutputUnit(e);
  };

  return (
    <div className='converter'>
      <section className='converterTop'>
        <Header 
          title = {massTitle}
          summary= {'그램 단위와 톤, 영미 단위계에서 쓰이는 이름이 다른 톤 등을 변환하는 사이트입니다.'}
        />
        <ButtonBar />
      </section>
      <section className='converterBottom'>
        <section className='converterBody'>
          <InputNum value={inputNum} onChange={handleInputNum} inUnit={inUnit} />
          <OutputNum getResult={result} outUnit={outUnit} />
        </section>
        <section className='converterSelector'>
        <UnitSelector
          className='inputUnitSelector'
          units={massOptionIn}
          value={inputMass}
          onChange={handleInputMass}
        />
        <UnitSelector
          className='outputUnitSelector'
          units={massOptionOut}
          value={outputMass}
          onChange={handleOutputMass}
        />
        </section>
      </section>

    </div>
  );
}

export default MassPage;

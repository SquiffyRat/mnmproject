import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';
import UnitSelector from '../component/UnitSelector';
import InputNum from '../component/InputNum';
import OutputNum from '../component/OutputNum';
import '../component/Page.css';

// mm~Km 단위도 추가하기
function LengthPage() {
  document.title = '단위 변환 - 길이';
  const lengthTitle = '단위 변환 - 길이';

  const lengthOptionIn = [
    { id: 'millimeter', label: '밀리미터', value: 1.0 },
    { id: 'centimeter', label: '센티미터', value: 10.0 },
    { id: 'meter', label: '미터', value: 1000.0 },
    { id: 'kilometer', label: '킬로미터', value: 1000000.0 },
    { id: 'inch', label: '인치', value: 25.4 },
    { id: 'foot', label: '피트', value: 304.8 },
    { id: 'yard', label: '야드', value: 914.4 },
    { id: 'mile', label: '마일', value: 1609300.0 },
  ];
  const lengthOptionOut = [
    { id: 'millimeter', label: '밀리미터', value: 1.0 },
    { id: 'centimeter', label: '센티미터', value: 10.0 },
    { id: 'meter', label: '미터', value: 1000.0 },
    { id: 'kilometer', label: '킬로미터', value: 1000000.0 },
    { id: 'inch', label: '인치', value: 25.4 },
    { id: 'foot', label: '피트', value: 304.8 },
    { id: 'yard', label: '야드', value: 914.4 },
    { id: 'mile', label: '마일', value: 1609300.0 },
  ];


  const [inputNum, setInputNum] = useState('');
  const [inputLength, setInputLength] = useState(1.0);
  const [outputLength, setOutputLength] = useState(1.0);
  const [result, setResult] = useState('');
  const [inUnit, setInUnit] = useState('밀리미터');
  const [outUnit, setOutUnit] = useState('밀리미터');

  useEffect(() => {
    if (inputNum !== '' && inputLength !== '' && outputLength !== '') {
      const parsedInputNum = parseFloat(inputNum);
      const parsedInputLength = parseFloat(inputLength);
      const parsedOutputLength = parseFloat(outputLength);

      setResult((parsedInputNum * parsedInputLength) / parsedOutputLength);
    } else {
      setResult('');
    }
  }, [inputNum, inputLength, outputLength]);

  const handleInputNum = (e) => {
    setInputNum(e.target.value);
  };

  const handleSetInputLength = (e) => {
    setInputLength(e.target.value);
  };

  const handleInputUnit = (e) => {
    setInUnit(e.target.options[e.target.options.selectedIndex].innerText);
  };

  const handleInputLength = (e) => {
    handleSetInputLength(e);
    handleInputUnit(e);
  };

  const handleSetOutputLength = (e) => {
    setOutputLength(e.target.value);
  };

  const handleOutputUnit = (e) => {
    setOutUnit(e.target.options[e.target.options.selectedIndex].innerText);
  };
  const handleOutputLength = (e) => {
    handleSetOutputLength(e);
    handleOutputUnit(e);
  };

  return (
    <div className='converter'>
      <section className='converterTop'>
        <Header
          title={lengthTitle}
          summary={'미터 단위와 인치, 피트, 마일과 같은 단위를 변환하는 사이트입니다.'}
        />
        <ButtonBar />
      </section>
      <section className='converterBottom'>
        <section className='converterBody'>
          <InputNum
            value={inputNum}
            onChange={handleInputNum}
            inUnit={inUnit}
          />
          <OutputNum getResult={result} outUnit={outUnit} />
        </section>
        <section className='converterSelector'>
          <UnitSelector
            className='inputUnitSelector'
            units={lengthOptionIn}
            value={inputLength}
            onChange={handleInputLength}
          />
          <UnitSelector
            className='outputUnitSelector'
            units={lengthOptionOut}
            value={outputLength}
            onChange={handleOutputLength}
          />
        </section>
        
      </section>
    </div>
  );
}

export default LengthPage;

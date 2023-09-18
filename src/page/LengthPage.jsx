import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';
import UnitSelector from '../component/UnitSelector';

// mm~Km 단위도 추가하기
function LengthPage() {
  const lengthTitle = '길이 변환';

  const [inputNum, setInputNum] = useState('');
  const [inputLength, setInputLength] = useState('');
  const [outputLength, setOutputLength] = useState('');
  const [result, setResult] = useState('');

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
  const handleInputLength = (e) => {
    setInputLength(e.target.value);
  };
  const handleOutputLength = (e) => {
    setOutputLength(e.target.value);
  };

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

  return (
    <div className='LengthConverter'>
      <section>
        <Header title={lengthTitle} summary={'길이 변환 설명'} />
        <ButtonBar />
      </section>
      <section>
        <input
          type='number'
          placeholder='숫자를 입력하십시오'
          value={inputNum}
          onChange={handleInputNum}
        />
      </section>
      <section>
        <UnitSelector
          units={lengthOptionIn}
          value={inputLength}
          onChange={handleInputLength}
        />
        <UnitSelector
          units={lengthOptionOut}
          value={outputLength}
          onChange={handleOutputLength}
        />
      </section>
      <section>{result}</section>
    </div>
  );
}

export default LengthPage;

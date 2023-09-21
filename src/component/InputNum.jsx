import React from 'react';
import './InputNum.css';

function InputNum(inputs) {
  const { value, onChange, inUnit } = inputs;

  return (
    <section className='inputNum'>
      <input
        className='inputC'
        type='number'
        placeholder='변환할 값(숫자)'
        value={value}
        onChange={onChange}
      />
      <p className='inputPhrase'>{value} {inUnit}은(는)</p>
    </section>
  );
}

export default InputNum;

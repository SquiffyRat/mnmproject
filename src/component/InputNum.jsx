import React from 'react';
import './InputNum.css';

function InputNum(inputs) {
  const { value, onChange, inUnit } = inputs;

  return (
    <section className='inputNum'>
      <input
        className='inputC'
        type='number'
        placeholder='숫자를 입력하십시오'
        value={value}
        onChange={onChange}
      />
      <p>{inUnit}은(는)</p>
    </section>
  );
}

export default InputNum;

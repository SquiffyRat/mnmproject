import React from 'react';
import './InputNum.css';

function InputNum(inputs) {
  const { value, onChange } = inputs;

  return (
    <input
      type='number'
      placeholder='숫자를 입력하십시오'
      value={value}
      onChange={onChange}
    />
  );
}

export default InputNum;

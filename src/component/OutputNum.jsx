import React from 'react';
import './OutputNum.css';

function OutputNum(re) {
  const { getResult, reUnit } = re;

  return (
    <section className='outputNum'>
      <p>
        {getResult}
        {reUnit}입니다.
      </p>
    </section>
  );
}

export default OutputNum;

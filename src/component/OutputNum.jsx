import React from 'react';
import './OutputNum.css';

function OutputNum(re) {
  const { getResult, outUnit } = re;

  return (
    <section className='outputNum' getResult={getResult} outUnit={outUnit}>
      <p>
        {getResult}
        {outUnit}입니다.
      </p>
    </section>
  );
}

export default OutputNum;

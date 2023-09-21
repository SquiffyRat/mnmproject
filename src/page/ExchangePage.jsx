import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';
import UnitSelector from '../component/UnitSelector';
import InputNum from '../component/InputNum';
import OutputNum from '../component/OutputNum';

function ExchangePage() {
  const countryListIn = [
    { id: '원', label: '대한민국', value: 'KRW' },
    { id: '달러', label: '미국', value: 'USD' },
    { id: '파운드', label: '영국', value: 'GBP' },
    { id: '달러', label: '캐나다', value: 'CAD' },
    { id: '유로', label: 'EU', value: 'EUR' },
    { id: 'Kyat', label: '미얀마', value: 'MMK' },
  ];
  const countryListOut = [
    { id: '원', label: '대한민국', value: 'KRW' },
    { id: '달러', label: '미국', value: 'USD' },
    { id: '파운드', label: '영국', value: 'GBP' },
    { id: '달러', label: '캐나다', value: 'CAD' },
    { id: '유로', label: 'EU', value: 'EUR' },
    { id: 'Kyat', label: '미얀마', value: 'MMK' },
  ];

  const [inputNum, setInputNum] = useState(1);
  const [responseData, setresponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputCountry, setInputCountry] = useState('USD');
  const [outputCountry, setOutputCountry] = useState('KRW');
  const [inUnit, setInUnit] = useState('미국 달러');
  const [outUnit, setOutUnit] = useState('대한민국 원');
  const [result, setResult] = useState('');

  const handleInputNum = (e) => {
    setInputNum(e.target.value);
    const result = e.target.value * responseData.conversion_rate;
    console.log(result);
  };

  const handleSetInputCountry = (e) => {
    setInputCountry(e.target.value);
  };

  const handleInputUnit = (e) => {
    setInUnit(e.target.options[e.target.options.selectedIndex].innerText);
  };

  const handleInputCountry = (e) => {
    handleSetInputCountry(e);
    handleInputUnit(e);
  };

  const handleSetOutputCountry = (e) => {
    setOutputCountry(e.target.value);
  };

  const handleOutputUnit = (e) => {
    setOutUnit(e.target.options[e.target.options.selectedIndex].innerText);
  };

  const handleOutputCountry = (e) => {
    handleSetOutputCountry(e);
    handleOutputUnit(e);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const baseCountry = inputCountry;
      const targetCountry = outputCountry;
      console.log('url확인', inputCountry, outputCountry);
      const url = `https://v6.exchangerate-api.com/v6/d7ef0d38ab4ea241b7cdb789/pair/${baseCountry}/${targetCountry}`;

      try {
        const response = await Axios.get(url);
        console.log(response.data);
        setresponseData(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [inputCountry, outputCountry]);
  console.log('상태값', responseData);
  if (loading) {
    return <div>불러오는 중입니다.</div>;
  }

  return (
    <div className='converter'>
      <section className='converterTop'>
        <Header />
        <ButtonBar />
      </section>
      <section className='converterBottom'>
        <InputNum input={inputNum} onChange={handleInputNum} inUnit={inUnit} />
        <UnitSelector
          units={countryListIn}
          value={inputCountry}
          onChange={handleInputCountry}
        />
        <UnitSelector
          units={countryListOut}
          value={outputCountry}
          onChange={handleOutputCountry}
        />
        <OutputNum getResult={result} outUnit={outUnit} />
        {/* {responseData.conversion_rate} */}
      </section>
    </div>
  );
}

export default ExchangePage;

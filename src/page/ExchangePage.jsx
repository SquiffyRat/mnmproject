import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';
import UnitSelector from '../component/UnitSelector';
import InputNum from '../component/InputNum';
import OutputNum from '../component/OutputNum';

function ExchangePage() {
  document.title = '단위 변환 - 환전';
  const exchangeTitle = '단위 변환 - 환전';
  
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

  const [inputNum, setInputNum] = useState(1.0);
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
    setResult(result);
  };

  const handleSetInputCountry = (e) => {
    const newCountry = e.target.value
    setInputCountry(newCountry);
  };

  const handleInputUnit = (e) => {
    const newUnit = e.target.options[e.target.options.selectedIndex].id;
    const newLabel = e.target.options[e.target.options.selectedIndex].innerText;
    setInUnit(newLabel + " " + newUnit);
  };

  const handleInputCountry = (e) => {
    handleSetInputCountry(e);
    handleInputUnit(e);
  };

  const handleSetOutputCountry = (e) => {
    const toCountry = e.target.value
    setOutputCountry(toCountry);
  };

  const handleOutputUnit = (e) => {
    const toUnit = e.target.options[e.target.options.selectedIndex].id;
    const toLabel = e.target.options[e.target.options.selectedIndex].innerText;
    setOutUnit(toLabel + " " + toUnit);
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
        setresponseData(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [inputCountry, outputCountry]);

  if (loading) {
    return <div>불러오는 중입니다.</div>;
  }

  return (
    <div className='converter'>
      <section className='converterTop'>
        <Header 
          title={exchangeTitle}
          summary={'영미 단위계를 사용하는 국가들과, 대한민국의 통화간의 환율을 보여주는 사이트입니다.'}
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
          units={countryListIn}
          value={inputCountry}
          onChange={handleInputCountry}
        />
        <UnitSelector
          className='outputUnitSelector'
          units={countryListOut}
          value={outputCountry}
          onChange={handleOutputCountry}
        />
        </section>
      </section>
    </div>
  );
}

export default ExchangePage;

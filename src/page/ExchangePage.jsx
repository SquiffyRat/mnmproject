import { Axios } from 'axios';
import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';

function ExchangePage() {
  const [conversion_rates, setconversion_rates] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const conversion_rates =
        'https://v6.exchangerate-api.com/v6/d7ef0d38ab4ea241b7cdb789/pair/KRW/USD';

      try {
        const response = await Axios.get(conversion_rates);
        setconversion_rates(response.data.conversion_rates);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(conversion_rates);
  if (loading) {
    return <div>불러오는 중입니다.</div>;
  }
  if (!conversion_rates) {
    return <div>정보를 불러올 수 없습니다.</div>;
  }

  return (
    <div className='Exchange'>
      <Header />
      <ButtonBar />
    </div>
  );
}

export default ExchangePage;

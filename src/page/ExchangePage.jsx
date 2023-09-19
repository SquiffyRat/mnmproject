import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';
import UnitSelector from '../component/UnitSelector';

function ExchangePage() {
  const [responseData, setresponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const responseData =
        'https://v6.exchangerate-api.com/v6/d7ef0d38ab4ea241b7cdb789/pair/KRW/KRW';

      try {
        const response = await Axios.get(responseData);
        console.log(response.data);
        setresponseData(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log('상태값', responseData);
  if (loading) {
    return <div>불러오는 중입니다.</div>;
  }
  if (!responseData) {
    return <div>정보를 불러올 수 없습니다.</div>;
  }

  return (
    <div className='converter'>
      <section className='converterTop'>
        <Header />
        <ButtonBar />
      </section>
      <section className='converterBottom'>
        <UnitSelector />
        {responseData.conversion_rate}
      </section>
    </div>
  );
}

export default ExchangePage;

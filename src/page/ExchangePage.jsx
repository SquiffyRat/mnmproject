import { axios } from 'axios';
import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';

function ExchangePage() {
  const [conversion_rates, setconversion_rates] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const url =
        'https://v6.exchangerate-api.com/v6/d7ef0d38ab4ea241b7cdb789/latest/KRW';

      try {
        const response = await axios.get(url);
        setconversion_rates(response.data.conversion_rates);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>불러오는 중입니다.</div>;
  }
  if (!conversion_rates) {
    return null;
  }

  return (
    <div>
      ExchangePage
      <Header />
      <ButtonBar />
    </div>
  );
}

export default ExchangePage;

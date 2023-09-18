import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Button from '../component/Button';
import Header from '../component/Header';
import ButtonBar from '../component/ButtonBar';

function HomePage() {
  document.title = '단위 변환';
  const homeTitle = '단위 변환';

  const navigate = useNavigate();
  const goHome = () => {
    navigate('/HomePage');
  };
  const goLength = () => {
    navigate('/LengthPage');
  };
  const goMass = () => {
    navigate('/MassPage');
  };
  const goVolume = () => {
    navigate('/VolumePage');
  };

  const [input, setInput] = useState('');
  // const [preview, setPreview] = useState("");
  const [result, setResult] = useState('');

  useEffect(() => {
    if (!input.trim()) {
    } else {
      const delay = setTimeout(() => setResult(input), 1000);
      setResult();
      return () => {
        clearTimeout(delay);
        setResult('');
      };
    }
  }, [input]);

  return (
    <div className='Home'>
      <Header
        title={homeTitle}
        summary={
          '미터법 간의 단위변환 혹은 야드파운드법 간의 변환을 보여주는 앱입니다. 야드파운드법에는 제국 단위계(Imperial)와 미국 단위계(US)가 있으며 북미, 영국, 미얀마 등지에서 쓰입니다.'
        }
      />
      <ButtonBar />

      <div>{/* <section className='' onClick={}></section> */}</div>
    </div>
  );
}

export default HomePage;

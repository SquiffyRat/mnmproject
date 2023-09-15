import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Button from '../component/Button';
import Header from '../component/Header';

function HomePage() {
  document.title = '단위 변환';
  const homeTitle = '단위 변환';

  const navigate = useNavigate();
  const goHome = () => {
    navigate('/HomePage');
  };
  const goLength = () => {
    navigate('/LengthCalculator');
  };
  const goMass = () => {
    navigate('/MassCalculator');
  };
  const goVolume = () => {
    navigate('/VolumeCalculator');
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
    <div>
      <Header
        title={homeTitle}
        summary={
          '미터법 간의 단위변환 혹은 야드파운드법 간의 변환을 보여주는 앱입니다. 야드파운드법은 다시 제국 단위계(Imperial)와 미국 단위계(US)로 나뉘며 이는 북미, 영국, 미얀마 등지에서 쓰입니다.'
        }
      />
      <div>
        {/* 현재 summary 내용의 일부를 홈페이지 중앙에 위치하도록 수정 */}
      </div>
      {/* <div className='inputWrap'>
        <input 
        type="text" 
        className='input' 
        placeholder='숫자를 입력하세요' 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        />
      </div> */}
    </div>
  );
}

export default HomePage;

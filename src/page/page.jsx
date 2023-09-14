import React from 'react';
import Header from '../component/header';
import { useNavigate } from 'react-router-dom';
import Button from '../component/button';

function Page() {
  const navigate = useNavigate();
  const backHome = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header
        summary={'계산할 단위와 숫자를 입력하세요.'}
        homebutton={<Button onClick={backHome} title='<' />}
      />
    </div>
  );
}

export default Page;

import React from 'react';
import Header from '../component/header';
import { useNavigate } from 'react-router-dom';
import Button from '../component/button';
import ButtonBar from '../component/ButtonBar';

function Page() {
  const navigate = useNavigate();
  const backHome = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header
        summary={'계산할 단위와 숫자를 입력하세요.'}
        backbutton={<Button onClick={backHome} title='<' />}
      />
      <ButtonBar />
    </div>
  );
}

export default Page;

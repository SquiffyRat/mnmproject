import React from 'react';
import Header from '../component/header';

function HomePage() {
  document.title = '단위 변환';
  const homeTitle = '단위 변환';

  return (
    <div>
      <Header title={homeTitle} summary={'홈페이지 설명'} />
    </div>
  );
}

export default HomePage;

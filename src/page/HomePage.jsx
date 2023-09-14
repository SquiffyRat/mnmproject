import React from 'react';
import Header from '../component/header';
import Button from '../component/button';

function HomePage() {
  document.title = '단위 변환';
  const homeTitle = '단위 변환';

  return (
    <div>
      <Header title={homeTitle} summary={'홈페이지 설명'} />
      {/* Buttonx3 */}
      {/* current exchange tab */}
    </div>
  );
}

export default HomePage;

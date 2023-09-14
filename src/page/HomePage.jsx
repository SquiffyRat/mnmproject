import React from 'react';
import Header from '../component/header';
import Button from '../component/button';

function HomePage() {
  document.title = '단위 변환';
  const homeTitle = '단위 변환';

  return (
    <div>
      <Header
        title={homeTitle}
        summary={
          '미터법 간의 단위변환과 야드파운드법 간의 변환을 보여주는 앱입니다. 야드파운드법은 다시 제국 단위계(Imperial)와 미국 단위계(US)로 나뉘며 이는 북미, 영국, 미얀마 등지에서 쓰입니다.'
        }
      />
      <div>
        {/* 현재 summary 내용의 일부를 홈페이지 중앙에 위치하도록 수정 */}
      </div>
      {/* Buttonx3 */}
      {/* current exchange tab */}
    </div>
  );
}

export default HomePage;

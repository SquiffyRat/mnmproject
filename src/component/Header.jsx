import React from 'react';
import './Header.css';

function Header({ title, summary, backbutton }) {
  return (
    <div className='Header'>
      <div className='header_title'>{title}</div>
      <div className='header_summary'>{summary}</div>
      <div className='backbutton'>{backbutton}</div>
    </div>
  );
}

export default Header;

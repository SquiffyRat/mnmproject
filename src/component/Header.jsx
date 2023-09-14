import React from 'react';
import './Header.css';

function Header({ title, summary, homebutton }) {
  return (
    <div className='Header'>
      <div className='header_title'>{title}</div>
      <div className='header_summary'>{summary}</div>
      <div className='homebutton'>{homebutton}</div>
    </div>
  );
}

export default Header;

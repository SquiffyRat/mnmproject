import React, { useState } from 'react';
import './Button.css';

function Button({ title, onClick, disabled }) {
  return (
    <div className='btn_wrap'>
      <section className='wrapper'>
        <button className='buttonC' onClick={onClick} disabled={disabled}>
          {title}
        </button>
      </section>
    </div>
  );
}

// function Accordian() {
//   // 아코디언 상태
//   const [isExpanded, setExpanded] = useState(false);
//   // 아코디언 접기/펼치기
//   const toggleAccordian = () => {
//     setExpanded(!isExpanded);
//   };
// }

// function ToggleButton() {
//   const [isActive, setActive] = useState(false);
//   const handleToggle = () => {
//     setActive(!isActive);
//   };
// }

export default Button;

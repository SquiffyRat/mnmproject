import React, { useState } from 'react';
import './Button.css';

function Button({ title, onClick }) {
  return <button onClick={onClick}>{title}</button>;
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

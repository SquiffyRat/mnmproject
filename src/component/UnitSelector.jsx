import React from 'react';
import './UnitSelector.css';

function UnitSelector(props) {
  const { units, value, onChange } = props;

  return (
    <select className='selectC' value={value} onChange={onChange}>
      {units.map((option) => (
        <option key={option.value} value={option.value} label={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default UnitSelector;

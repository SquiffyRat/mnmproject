import React from 'react';

function UnitSelector(props) {
  const { units, value, onChange } = props;

  return (
    <select value={value} onChange={onChange}>
      {units.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default UnitSelector;

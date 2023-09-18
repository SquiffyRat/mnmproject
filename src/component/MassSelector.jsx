import React, { useState } from 'react';

function MassSelector() {
  const massOptions = [
    { id: 'gram', label: '그램', value: 1.0 },
    { id: 'kilogram', label: '킬로그램', value: 1000.0 },
    { id: 'ton', label: '톤', value: 1000000.0 },
    { id: 'ounce', label: '온스', value: 28.35 },
    { id: 'pound', label: '파운드', value: 453.6 },
    { id: 'longton', label: '롱톤', value: 1016046.9088 },
    { id: 'shortton', label: '숏톤', value: 917184.74 },
  ];

  const [selectedMass, setSelectedMass] = useState(null);
  const handleSelectedMass = (e) => {
    setSelectedMass(e.target.value);
  };

  return (
    <div>
      <select value={selectedMass} onChange={handleSelectedMass}>
        {massOptions.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MassSelector;

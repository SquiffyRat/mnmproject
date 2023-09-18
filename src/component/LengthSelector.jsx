import React, { useState } from 'react';

function LengthSelector() {
  const lengthOptions = [
    { id: 'millimeter', label: '밀리미터', value: 1.0 },
    { id: 'centimeter', label: '센티미터', value: 10.0 },
    { id: 'meter', label: '미터', value: 1000.0 },
    { id: 'kilometer', label: '킬로미터', value: 1000000.0 },
    { id: 'inch', label: '인치', value: 25.4 },
    { id: 'foot', label: '피트', value: 304.8 },
    { id: 'yard', label: '야드', value: 914.4 },
    { id: 'mile', label: '마일', value: 1609300.0 },
  ];

  const [selectedLength, setSelectedLength] = useState(null);
  const handleSelectedLength = (e) => {
    setSelectedLength(e.target.value);
  };

  return (
    <div>
      <select value={selectedLength} onChange={handleSelectedLength}>
        {lengthOptions.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LengthSelector;

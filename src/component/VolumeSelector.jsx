import React, { useState } from 'react';

function VolumeSelector() {
  const volumeOptions = [
    { id: 'milliliter', label: '밀리리터', value: 1.0 },
    { id: 'liter', label: '리터', value: 1000.0 },
    { id: 'uspint', label: '갤런', value: 473.2 },
    { id: 'usgallon', label: '파인트', value: 3785.412 },
    { id: 'imppint', label: '제국파인트', value: 568.3 },
    { id: 'impgallon', label: '제국갤런', value: 4546.09 },
  ];

  const [selectedVolume, setSelectedVolume] = useState(null);
  const handleSelectedVolume = (e) => {
    setSelectedVolume(e.target.value);
  };

  return (
    <div>
      <select value={selectedVolume} onChange={handleSelectedVolume}>
        {volumeOptions.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default VolumeSelector;

import React from 'react';

function Viewer({ inputNum, inputUnit, outputUnit }) {
  return (
    <div className='Viewer'>
      <div className='viewer_inputNum'>{inputNum}</div>
      <div className='viewer_inputUnit'>{inputUnit}</div>
      <div className='viewer_outputUnit'>{outputUnit}</div>
    </div>
  );
}

export default Viewer;

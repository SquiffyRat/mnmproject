import React from 'react';
import Button from './button';

function ButtonBar() {
  return (
    <div>
      <Button title={'길이'}></Button>
      <Button title={'부피'}></Button>
      <Button title={'질량'}></Button>
    </div>
  );
}

export default ButtonBar;

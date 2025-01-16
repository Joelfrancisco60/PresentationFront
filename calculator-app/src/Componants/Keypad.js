import React from 'react';
import Button from './Button';

const Keypad = ({ onButtonClick }) => {
  const buttons = [
    '7', '8', '9', 'DEL',
    '4', '5', '6', '+',
    '1', '2', '3', '-',
    '.', '0', '/', 'x',
    'RESET', '='
  ];

  return (
    <div className="keypad">
      {buttons.map((btn, index) => (
        <Button key={index} value={btn} onClick={() => onButtonClick(btn)} />
      ))}
    </div>
  );
};

export default Keypad;

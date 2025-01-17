import React from 'react';

const Button = ({ value, onClick }) => {
  return (
    <button className={`button ${value}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;

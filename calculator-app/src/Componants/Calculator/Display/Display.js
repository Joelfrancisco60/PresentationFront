import React from 'react';

const Display = ({ value }) => {
  return <div className="display">
    <span className="display__result">{value}</span>
    </div>;
};

export default Display;

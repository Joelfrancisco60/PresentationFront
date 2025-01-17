import React from 'react';

const Display = ({ value }) => {
  if (value === "Error")
    return <div className="display">
        <span className="display__result display__result--error">{value}</span>
      </div>;
  else
    return <div className="display">
        <span className="display__result display__result--default">{value}</span>
      </div>;
};

export default Display;

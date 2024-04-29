import React, { useState } from 'react';
import './Toggle.css';

const Toggle = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleToggle = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="toggle-container">
      <div className="save-details">Save Details</div>
      <div className="toggle" onClick={handleToggle}>
        <div className={`toggle-circle ${isSaved ? 'active' : ''}`} />
      </div>
    </div>
  );
};

export default Toggle;

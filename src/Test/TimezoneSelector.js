import React, { useState } from 'react';

const TimezoneSelector = () => {
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');

  const handleTimezoneChange = (e) => {
    // Handle timezone change logic
    const newTimezone = e.target.value;
    setSelectedTimezone(newTimezone);
    // Logic to update displayed times based on the selected timezone
  };

  return (
    <div>
        <h3>Timerzone</h3>
      <select onChange={handleTimezoneChange} style={{width:"600px",height:"40px"}}>
        <option value="UTC">UTC</option>
        <option value="OtherTimezone">Other Timezone</option>
      </select>
    </div>
  );
};

export default TimezoneSelector;

import React, { useState } from 'react';

const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
 
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');

  const handleTimezoneChange = (e) => {
    // Handle timezone change logic
    const newTimezone = e.target.value;
    setSelectedTimezone(newTimezone);
    // Logic to update displayed times based on the selected timezone
  };
  const moveToPreviousWeek = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 7); // Move back 7 days for a week
      return newDate;
    });
  };

  const moveToNextWeek = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 7); // Move forward 7 days for a week
      return newDate;
    });
  };

  return (
    <div >
   <div style={{display :"flex",gap:"550px",border:"1px solid"}}>
   <button style={{border:"none"}} onClick={moveToPreviousWeek}>Previous</button>
      <h2>{currentDate.toDateString()}</h2>
      <button style={{border:"none"}} onClick={moveToNextWeek}>Next</button>

   </div>
   <div style={{border:"1px solid"}}>
        <h3>Timerzone</h3>
      <select onChange={handleTimezoneChange} style={{width:"1513px",height:"40px"}}>
        <option value="UTC">UTC</option>
        <option value="IST" selected>IST</option>
      </select>
    </div>
   
      
    </div>
  );
};

export default DateDisplay;

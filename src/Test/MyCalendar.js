import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Example library for calendar
import 'react-datepicker/dist/react-datepicker.css'
function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // State to track selected date
  const [jsonData, setJsonData] = useState([]); // Your JSON data state

  // Handler for date change in the calendar
  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Filter your JSON data based on the selected week and set it in state
    const selectedWeekData = jsonData.filter((item) => {
      const itemDate = new Date(item.Date);
      return itemDate >= date && itemDate < new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds
    });
    setJsonData(selectedWeekData);
  };

  return (
    <div>
   <div className='form-group' style={{paddingLeft:"500px"}}><DatePicker  selected={selectedDate} onChange={handleDateChange} /></div>    
    </div>
  );
}

export default MyCalendar;

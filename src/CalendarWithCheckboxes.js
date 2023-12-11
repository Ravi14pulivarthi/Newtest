import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Assume usage of a date picker library

function CalendarWithCheckboxes({ jsonData }) {
  const [selectedWeek, setSelectedWeek] = useState([]); // State to hold data for the selected week

  // Function to handle week selection in the calendar
  const handleWeekSelection = (weekStartDate) => {
    const endDate = new Date(weekStartDate.getTime() + 6 * 24 * 60 * 60 * 1000); // Get end date of the week
    const weekData = jsonData.filter((item) => {
      const itemDate = new Date(item.Date);
      return itemDate >= weekStartDate && itemDate <= endDate;
    });
    setSelectedWeek(weekData);
  };

  return (
    <div>
      <DatePicker
        selected={null} // Pass in the selected date (null by default)
        onChange={handleWeekSelection} // Handle date change event
        dateFormat="MM/dd/yyyy" // Specify date format if needed
        showWeekNumbers
        startDate={new Date()} // Set start date for the calendar
        selectsStart
        inline // Show the calendar inline
      />
      {/* Render checkboxes based on the selected week's data */}
      {selectedWeek.map((item) => (
        <div key={item.Id}>
          <input type="checkbox" id={`checkbox-${item.Id}`} />
          <label htmlFor={`checkbox-${item.Id}`}>
            {item.Name} - Date: {item.Date} - Time: {item.Time}
          </label>
        </div>
      ))}
    </div>
  );
}

export default CalendarWithCheckboxes;

import React, { useState, useEffect } from 'react';

function ScheduleComponent() {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    fetch('./data.json') // Replace with your file path
      .then((response) => response.json())
      .then((data) => setScheduleData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Render checkboxes based on scheduleData
  return (
    <div>
      {scheduleData.map((item) => (
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

export default ScheduleComponent;

import React from "react";

const WeeklySchedule = () => {
  // Logic to generate weekly schedule based on selected date and timezone
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const workingHours = [
    "8:00AM",
    "8:30AM",
    "9:00AM",
    "9:30AM",
    "10:00AM",
    "10:30AM",
    "11:00AM",
    "11:30AM",
    "12:00PM",
    "12:30PM",
    "1:00PM",
    "1:30PM",
    "2:00PM",
    "2:30PM",
    "3:00PM",
    "3:30PM",
    "4:00PM",
    "4:30PM",
    "5:00PM",
    "5:30PM",
    "6:00PM",
    "6:30PM",
    "7:00PM",
    "7:30PM",
    "8:00PM",
    "8:30PM",
    "9:00PM",
    "9:30PM",
    "10:00PM",
    "10:30PM",
    "11:00PM",
    "11:30PM",
  ];

  const renderSchedule = () => {
    // Render schedule for each day and time slot with checkboxes
    return daysOfWeek.map((day) => (
 
    <div key={day} style={{display:"flex"}}  >
        <div style={{padding:"50px"}}><h3>{day}</h3></div>
        <div >
             <div style={{ display:"flex",gap:"30px",margin:"10px"}}>
        {workingHours.map((hour, index) => {
          if (index <= 7) {
            return (
              <div key={`${day}-${hour}`}   >
                <input type="checkbox" id={`${day}-${hour}`} />
                <label htmlFor={`${day}-${hour}`}>{hour}</label>
                </div>
           
            );
          }
        })}
               </div>
               <div  style={{ display:"flex",gap:"30px",margin:"10px"}}>
        {workingHours.map((hour, index) => {
          if ( index >7 && index <= 18) {
            return (
              <div key={`${day}-${hour}`}   >
                <input type="checkbox" id={`${day}-${hour}`} />
                <label htmlFor={`${day}-${hour}`}>{hour}</label>
                </div>
           
            );
          }
        })}
               </div>
               <div  style={{ display:"flex",gap:"30px",margin:"10px"}}>
        {workingHours.map((hour, index) => {
          if (  index > 18 && index  <= 27) {
            return (
              <div key={`${day}-${hour}`}   >
                <input type="checkbox" id={`${day}-${hour}`} />
                <label htmlFor={`${day}-${hour}`}>{hour}</label>
                </div>
           
            );
          }
        })}
               </div>
          </div>
          
      </div>
     
    ));
  };

  return <div>{renderSchedule()}</div>;
};

export default WeeklySchedule;

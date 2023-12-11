
// import './App.css';
import CalendarWithCheckboxes from './CalendarWithCheckboxes';
import DateDisplay from './Test/DateDisplay ';
import MyCalendar from './Test/MyCalendar';
import ScheduleComponent from './Test/ScheduleComponent';
import TimezoneSelector from './Test/TimezoneSelector';
import WeeklySchedule from './Test/WeeklySchedule';



function App() {
 const data=[
  {
    "Id": 101,
    "Name": "Test",
    "Date": "2023-07-20",
    "Time": "22:30"
  },
  {
    "Id": 102,
    "Name": "Test 1",
    "Date": "2023-07-21",
    "Time": "09:00"
  }
]

  return (
    <div className="App">
   
<DateDisplay/>
<br/><br/>
<WeeklySchedule/> 
<br/><br/><br/><br/><br/><br/>
 <ScheduleComponent/>
 <br/><br/><br/><br/><br/><br/>
  <MyCalendar/>
 
    </div>
  
  );
}

export default App;

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SideBar from '../components/Sidebar';
import Header from "../components/Header";


function OurCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='p-column-container'>
        <Header title="Calendar"/>
        <div className = "p-container">
        <SideBar/>
        </div>
      <div>
            <Calendar onChange={onChange} value={value} />
      </div> 
    </div>
    
  );
}
export default OurCalendar;

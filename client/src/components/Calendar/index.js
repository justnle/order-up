import React from 'react';
import './style.css';
function Calendar(props) {
  return <input id='calendar' type='date' {...props}></input>;
}

export default Calendar;

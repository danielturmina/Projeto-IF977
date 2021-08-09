import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import './style.css';

function Calendar() {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div className= "calendar">
      <DateRangePicker
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Calendar
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.scss';
import moment from 'moment';

const Plans = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar">
      <Calendar
        onChange={onChange}
        value={value}
        prevLabel="←"
        nextLabel="→"
        formatShortWeekday={(locale, date) => moment(date).format('dd')}
        formatMonthYear={(locale, date) => moment(date).format('MMMM YYYY')}
        tileDisabled={({ activeStartDate, date, view }) => date.getDay() === 0}
      />
    </div>
  );
};

export default Plans;

// CalendarView.js

import React, { useState } from 'react';
import './Calendar.css'; // Assuming this is your stylesheet

function CalendarView({ slots, setSelectedDate }) {
  const currentDate = new Date();
  const [displayedMonth, setDisplayedMonth] = useState(currentDate.getMonth());
  const [displayedYear, setDisplayedYear] = useState(currentDate.getFullYear());

  const goToPreviousMonth = () => {
    const newMonth = displayedMonth === 0 ? 11 : displayedMonth - 1;
    const newYear = displayedMonth === 0 ? displayedYear - 1 : displayedYear;
    setDisplayedMonth(newMonth);
    setDisplayedYear(newYear);
  };

  const goToNextMonth = () => {
    const newMonth = displayedMonth === 11 ? 0 : displayedMonth + 1;
    const newYear = displayedMonth === 11 ? displayedYear + 1 : displayedYear;
    setDisplayedMonth(newMonth);
    setDisplayedYear(newYear);
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const totalDaysInMonth = daysInMonth(displayedMonth, displayedYear);
  const startingDayOfMonth = firstDayOfMonth(displayedMonth, displayedYear);

  const renderCalendarDates = () => {
    const calendarDates = [];
    const todayDate = currentDate.getDate();
    const todayMonth = currentDate.getMonth();
    const todayYear = currentDate.getFullYear();
  
    // Calculate maximum allowed date
    const maxAllowedDate = new Date();
    maxAllowedDate.setMonth(maxAllowedDate.getMonth() + 2);
  
    // Calculate days in previous month
    const prevMonthDays = daysInMonth(displayedMonth === 0 ? 11 : displayedMonth - 1, displayedMonth === 0 ? displayedYear - 1 : displayedYear);
  
    // Calculate starting day index (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const startDayIndex = firstDayOfMonth(displayedMonth, displayedYear);
  
    // Add empty slots for the days from previous month
    for (let i = 0; i < startDayIndex; i++) {
      calendarDates.push(
        <div
          key={`empty-${i}`}
          className="calendar-date inactive"
        >
          {/* You can leave this empty or add a placeholder */}
        </div>
      );
    }
  
    // Add the actual dates of the current month
    for (let date = 1; date <= totalDaysInMonth; date++) {
      const dateSlots = slots.find(slot => slot.date === date && slot.month === displayedMonth + 1 && slot.year === displayedYear);
      const allSlotsBooked = dateSlots && dateSlots.slots.every(slot => slot.bookingsCount >= slot.occupancyLimit);
      const calendarDateClass = allSlotsBooked ? 'unavailable' : '';
  
      // Determine if the date is clickable
      const isClickable = new Date(displayedYear, displayedMonth, date) >= new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) && new Date(displayedYear, displayedMonth, date) <= maxAllowedDate;
  
      calendarDates.push(
        <div
          key={date}
          className={`calendar-date ${calendarDateClass} ${isClickable ? 'clickable' : 'inactive'}`}
          onClick={isClickable ? () => setSelectedDate({ date, month: displayedMonth + 1, year: displayedYear }) : null}
        >
          {date}
        </div>
      );
    }
    return calendarDates;
  };
  
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}>&lt;</button>
        <h3>{`${displayedMonth + 1}/${displayedYear}`}</h3>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className="calendar">
        <div className="weekdays">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="weekday">{day}</div>
          ))}
        </div>
        {renderCalendarDates()}
      </div>
    </div>
  );
}

export default CalendarView;

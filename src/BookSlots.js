import React, { useState, useEffect } from 'react';
import CalendarView from './CalendarView';
import SlotBooking from './SlotBooking';
import { getAvailableSlots } from './api';
import './BookSlots.css';

function BookSlots() {
  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState({
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  });

  const fetchSlots = async (month, year) => {
    const response = await getAvailableSlots(month, year);
    setSlots(response);
  };

  useEffect(() => {
    const currentDate = new Date();
    fetchSlots(currentDate.getMonth() + 1, currentDate.getFullYear());
  }, []);

  const handleDateSelect = (dateInfo) => {
    setSelectedDate(dateInfo);
  };

  return (
    <div id="book-slots" className="book-slots">
      <h2>Book an appointment</h2>
      <div style={{ flex: 1 }}>  {/* Apply flex: 1 for equal space */}
        <CalendarView slots={slots} setSelectedDate={handleDateSelect} />
      </div>
      {selectedDate && (
        <div style={{ flex: 1 }}>  {/* Apply flex: 1 for equal space */}
          <SlotBooking
            date={selectedDate.date}
            month={selectedDate.month}
            year={selectedDate.year}
            slots={slots}
          />
        </div>
      )}
    </div>
  );
}

export default BookSlots;


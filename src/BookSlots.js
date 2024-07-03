import React, { useState, useEffect } from 'react';
import CalendarView from './CalendarView';
import SlotBooking from './SlotBooking';
import { getAvailableSlots } from './api';

function BookSlots() {
  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

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
    <div>
      <CalendarView slots={slots} setSelectedDate={handleDateSelect} />
      {selectedDate && <SlotBooking date={selectedDate.date} month={selectedDate.month} year={selectedDate.year} slots={slots} />}
    </div>
  );
}

export default BookSlots;
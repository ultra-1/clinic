import React, { useState } from 'react';
import { updateSlots } from './api';
import './SlotBooking.css'; // Assuming this is your stylesheet

function SlotBooking({ date, month, year, slots }) {
  const dateSlots = slots.find(slot => slot.date === date && slot.month === month && slot.year === year);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleBooking = async () => {
    if (selectedSlot !== null) {
      await updateSlots(date, selectedSlot);
      alert('Slot booked successfully!');
    } else {
      alert('Please select a slot to book.');
    }
  };

  return (
    <div>
      <h2>Book a Slot for {date}/{month}/{year}</h2>
      {dateSlots ? (
        <div>
          {dateSlots.slots.map((slot, index) => (
            <div
              key={index}
              className={`slot ${slot.bookingsCount >= slot.occupancyLimit ? 'booked' : ''}`}
              onClick={() => setSelectedSlot(index)}
            >
              {slot.time} - {slot.bookingsCount >= slot.occupancyLimit ? 'Booked' : 'Available'}
            </div>
          ))}
          <button onClick={handleBooking}>Book Slot</button>
        </div>
      ) : (
        <p>No available slots for this date.</p>
      )}
    </div>
  );
}

export default SlotBooking;
export const getAvailableSlots = async (month, date) => {
    // Mock API call, replace with actual API call
    const response = [
      { date: 1, slots: [{ time: '09:00', bookingsCount: 5, occupancyLimit: 10 }, { time: '09:30', bookingsCount: 10, occupancyLimit: 10 }] },
      { date: 2, slots: [{ time: '10:00', bookingsCount: 3, occupancyLimit: 10 }, { time: '10:30', bookingsCount: 2, occupancyLimit: 10 }] },
    ];
    return response;
  };
  
  export const updateSlots = async (date, slotIndex) => {
    // Mock API call, replace with actual API call
    console.log(`Updating slot ${slotIndex} for date ${date}`);
  };
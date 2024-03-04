import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, onDateChange }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });
  };
  if (guests < 1 || guests > 10) {
    alert('Number of guests must be between 1 and 10.');
    return;
  }

  return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='center'>
                <h5> Book a table </h5>
                <p class="p-about">
            {" "}
            Whether you're planning a romantic dinner, a family gathering, or a
            casual meal with friends, we're here to ensure you have the perfect
            spot.{" "}
          </p>
                <div className='row'>
                    <input className='input' type="date" id="res-date" value={date} onChange={e => { setDate(e.target.value); onDateChange(e.target.value); }} />
                    <select className='input' id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                        <option value="" disabled>Select time</option>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
                <div className='row'>
                    <input className='input' type="number" placeholder="Number of guests" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
                    <select className='input' id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                        <option value="" disabled>Select occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>
                <div className='btn-confirm'>
                    <input className='btn' type="submit" value="Make Your Reservation" />
                </div>
            </div>
        </form>
  );
}

export default BookingForm;

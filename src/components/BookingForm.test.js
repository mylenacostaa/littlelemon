import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders BookingForm', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText(/Make Your Reservation/i);
  expect(linkElement).toBeInTheDocument();
});

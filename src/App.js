// src/App.js
import React, { useState } from 'react';
import './App.css'; // Ajuste o caminho do import se necessário
import NavBar from './components/NavBar';
import Header from './components/Header';
import PopularDishes from './components/PopularDishes';
import AboutUs from './components/AboutUs';
import BookTable from './components/BookTable';
import BookingForm from './components/BookingForm'; // Certifique-se de que o componente BookingForm esteja corretamente importado
import Footer from './components/Footer';

function App() {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  const handleDateChange = (date) => {
    // Aqui você pode adicionar lógica para atualizar availableTimes baseado na data
    console.log(date);
  };

  return (
    <div className="App">
      <NavBar />
      <Header />
      <PopularDishes />
      <BookTable />
      <AboutUs />
      <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange} />
      <Footer />
    </div>
  );
}

export default App;

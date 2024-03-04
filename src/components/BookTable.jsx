// src/components/BookTable.js
import React from "react";

function BookTable() {
  return (
    <div className="book-table">
      <img className="table" src="reserve.avif" alt="Reserve a table" />
      <div className="reserve">
        <div className="center">
          <h5>Book a table</h5>
          <p class="p-about">
            {" "}
            Whether you're planning a romantic dinner, a family gathering, or a
            casual meal with friends, we're here to ensure you have the perfect
            spotSimply click on our "Book a Table" button and select your
            preferred date, time, and number of guests. Our intuitive booking
            system will guide you through the process, and you'll receive
            instant confirmation of your reservation.{" "}
          </p>
          <p class="p-about">
            {" "}
            At Little Lemon, we're committed to making every dining experience
            memorable.{" "}
          </p>
          <a class="book-btn-2" data-button="info" href="link-inválido">
            {" "}
            Book a table{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookTable;

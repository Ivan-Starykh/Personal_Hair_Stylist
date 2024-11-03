import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !date || !service) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }
    onSubmit({ name, phone, date, service });
  };

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h3>Запись на прием</h3>
        <label htmlFor="name">Имя</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите ваше имя"
        />

        <label htmlFor="phone">Номер телефона</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Введите ваш номер телефона"
          pattern="^\+?[0-9\s]{10,15}$" /* Регулярное выражение для валидации */
          required
        />

        <label htmlFor="date">Дата и время</label>
        <input
          type="datetime-local"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="service">Выберите услугу</label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="">Выберите услугу</option>
          <option value="Стрижка">Стрижка</option>
          <option value="Окрашивание">Окрашивание</option>
          <option value="Укладка">Укладка</option>
        </select>

        <button type="submit" className="submit-button">Записаться</button>
      </form>
    </div>
  );
}

export default BookingForm;

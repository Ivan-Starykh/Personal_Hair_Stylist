import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Выбрать что делаем", // Устанавливаем "Стрижка" как значение по умолчанию
    date: "",
    time: ""
  });

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const options = ["Стрижка", "Окрашивание", "Укладка", "Иное"];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, ""); // Убираем все, кроме цифр
      setFormData((prevData) => ({
        ...prevData,
        [name]: phoneValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleOptionClick = (option) => {
    setFormData((prevData) => ({
      ...prevData,
      service: option,
    }));
    setIsSelectOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formData.phone)) {
      alert("Пожалуйста, введите номер телефона в формате 9628888588 (10 цифр).");
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Запись на прием</h2>

        <label htmlFor="name">Имя</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Телефон:</label>
        <div className="phone-input">
          <span>+7</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength="10" // Ограничение на 10 цифр
            required
            placeholder="9628888588"
          />
        </div>

        <label>Дата:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <label>Время:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />

        <label>Услуга:</label>
        <div
          className={`custom-select ${isSelectOpen ? "open" : ""}`}
          onClick={() => setIsSelectOpen(!isSelectOpen)}
        >
          <div className="selected-option">{formData.service}</div>
          <span className={`select-arrow ${isSelectOpen ? "open" : ""}`} />
          {isSelectOpen && (
            <ul className="options-list">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="option-item"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" className="submit-button">Записаться</button>
      </form>
    </div>
  );
}

export default BookingForm;

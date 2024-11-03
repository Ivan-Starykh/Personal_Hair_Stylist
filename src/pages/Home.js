import React, { useState } from "react";
import "./Home.css";
import BookingForm from "../components/BookingForm";
import ConfirmationModal from "../components/ConfirmationModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";


function Home() {
  // Управляем состоянием отображения формы и модального окна
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  // Обработка отправки формы записи
  const handleFormSubmit = (details) => {
    setAppointmentDetails(details);
	// Разделяем дату и время
		const [date, time] = details.date.split("T");
		setAppointmentDetails({ ...details, date, time });
    setShowForm(false);
    setShowModal(true);
  };

  // Подтверждение записи
  const handleConfirm = () => {
    setShowModal(false);
    alert("Запись подтверждена!");
    // Логика для сохранения данных записи
  };

  // Отмена записи
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <section id="home" className="home">
      <h1>
        <FontAwesomeIcon icon={faScissors} /> Welcome to Your Personal Hair Stylist
      </h1>
      <p>Professional haircuts and coloring just for you.</p>
      <button className="book-button" onClick={() => setShowForm(true)}>
			<FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '8px' }} />Записаться на прием
      </button>

      {/* Отображение формы записи при нажатии на кнопку */}
      {showForm && <BookingForm onSubmit={handleFormSubmit} />}

      {/* Отображение модального окна подтверждения */}
      {showModal && (
        <ConfirmationModal
          details={appointmentDetails}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </section>
  );
}

export default Home;

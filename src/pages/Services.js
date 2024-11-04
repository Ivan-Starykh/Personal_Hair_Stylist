import React, { useState } from "react";
import "./Services.css";
import Modal from "../components/Modal"; // Модальное окно
import BookingForm from "../components/BookingForm"; // Форма записи
import ConfirmationModal from "../components/ConfirmationModal"; // Модальное окно подтверждения

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Для формы записи
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false); // Для окна подтверждения
  const [selectedService, setSelectedService] = useState("");
  const [appointmentDetails, setAppointmentDetails] = useState(null); // Детали записи

  const servicesList = [
    { name: "Стрижка", description: "Современные и классические стрижки на любой вкус." },
    { name: "Окрашивание", description: "Профессиональное окрашивание, включая сложные техники." },
    { name: "Укладка", description: "Стилизация и укладка для любого мероприятия." },
    { name: "Уход за волосами", description: "Комплексные уходовые процедуры для здоровья волос." },
  ];

  // Открытие модального окна и установка выбранной услуги
  const handleBookClick = (serviceName) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  // Обработка формы и открытие окна подтверждения
  const handleFormSubmit = (details) => {
    setAppointmentDetails(details);
    setIsModalOpen(false);
    setIsConfirmationOpen(true);
  };

  const handleConfirm = () => {
    // Здесь можно отправить данные на сервер или выполнить другие действия
    setIsConfirmationOpen(false);
    alert("Запись подтверждена!");
  };

  const handleCancelConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <section className="services">
      <h2>Услуги</h2>
      <div className="services-list">
        {servicesList.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <button className="book-button" onClick={() => handleBookClick(service.name)}>Записаться</button>
          </div>
        ))}
      </div>

      {/* Модальное окно для формы записи */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <BookingForm
            selectedService={selectedService}
            onSubmit={handleFormSubmit}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>
      )}

      {/* Модальное окно подтверждения */}
      {isConfirmationOpen && (
        <ConfirmationModal
          isOpen={isConfirmationOpen}
          details={appointmentDetails}
          onConfirm={handleConfirm}
          onCancel={handleCancelConfirmation}
        />
      )}
    </section>
  );
}

export default Services;

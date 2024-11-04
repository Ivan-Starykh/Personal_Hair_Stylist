import React, { useState } from "react";
import "./Services.css";
import BookingForm from "../components/BookingForm"; 

function Services() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const servicesList = [
    { name: "Стрижка", description: "Современные и классические стрижки на любой вкус." },
    { name: "Окрашивание", description: "Профессиональное окрашивание, включая сложные техники." },
    { name: "Укладка", description: "Стилизация и укладка для любого мероприятия." },
    { name: "Уход за волосами", description: "Комплексные уходовые процедуры для здоровья волос." },
  ];

  // Открытие модального окна и установка выбранной услуги
  const handleBookClick = (serviceName) => {
    setSelectedService(serviceName);
    setIsBookingModalOpen(true);
  };

  // Закрытие модального окна
  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedService("");
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
      {isBookingModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <BookingForm selectedService={selectedService} onClose={closeBookingModal} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
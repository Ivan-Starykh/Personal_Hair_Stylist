import React from "react";
import "./Services.css";

function Services() {
  const servicesList = [
    { name: "Стрижка", description: "Современные и классические стрижки на любой вкус." },
    { name: "Окрашивание", description: "Профессиональное окрашивание, включая сложные техники." },
    { name: "Укладка", description: "Стилизация и укладка для любого мероприятия." },
    { name: "Уход за волосами", description: "Комплексные уходовые процедуры для здоровья волос." },
  ];

  return (
    <section className="services">
      <h2>Услуги</h2>
      <div className="services-list">
        {servicesList.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <button className="book-button">Записаться</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

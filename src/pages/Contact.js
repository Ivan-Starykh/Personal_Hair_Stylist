import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section className="contact-section">
      <h2>Контакты</h2>
      
      <div className="contact-details">
        <div className="address">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p>ул. Центральная, 123, Сочи</p>
        </div>
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} />
          <p>+7 (962) 888-85-88</p>
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>example@salon.ru</p>
        </div>
      </div>

      <div className="social-media">
        <a href="https://wa.me/79628888588" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="https://vk.com/your_profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faVk} />
        </a>
      </div>

      <div className="map">
        {/* Вставьте код карты, например, Google Maps или Яндекс.Карты */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.1533162585426!2d37.61763521567227!3d55.75582698055407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab0f3f4a8c637%3A0xb0f5a89a57578a0!2sRed%20Square%2C%20Moscow%2C%20Russia!5e0!3m2!1sen!2sus!4v1614872741729!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;

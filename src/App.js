import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Reviews from "./pages/Reviews";
import Modal from "./components/Modal"; // Импортируем модальное окно
import BookingForm from "./components/BookingForm"; // Форма записи
import ConfirmationModal from "./components/ConfirmationModal"; // Импортируем окно подтверждения
import Contact from "./pages/Contact";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Создаем реф для меню
	const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
	const [isConfirmationOpen, setIsConfirmationOpen] = useState(false); // Состояние для окна подтверждения
  const [appointmentDetails, setAppointmentDetails] = useState(null); // Детали записи


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

	const handleFormSubmit = (details) => {
    setAppointmentDetails(details);
    setIsModalOpen(false);
    setIsConfirmationOpen(true);
  };

  const handleConfirm = () => {
    // Здесь вы можете отправить данные на сервер или выполнить другие действия
    setIsConfirmationOpen(false);
    alert("Запись подтверждена!");
  };

  const handleCancelConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <Router>
      <header className="header">
        <h2 className="logo">
          <FontAwesomeIcon icon={faScissors} />
        </h2>
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
        <nav ref={menuRef} className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>Главная</Link>
          <Link to="/about" onClick={closeMenu}>Обо мне</Link>
          <Link to="/services" onClick={closeMenu}>Услуги</Link>
          <Link to="/portfolio" onClick={closeMenu}>Портфолио</Link>
          <Link to="/reviews" onClick={closeMenu}>Отзывы</Link>
					<Link to="/contact" onClick={closeMenu}>Контакты</Link>
        </nav>
      </header>
      <main>
        <Routes>
				<Route path="/" element={<Home onBookAppointment={() => setIsModalOpen(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/reviews" element={<Reviews />} />
					<Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

			{/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BookingForm onSubmit={handleFormSubmit} />
      </Modal>

			{/* Модальное окно подтверждения */}
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        details={appointmentDetails}
        onConfirm={handleConfirm}
        onCancel={handleCancelConfirmation}
      />
    </Router>
  );
}

export default App;

import React from "react";
import "./ConfirmationModal.css";

function ConfirmationModal({ isOpen, details, onConfirm, onCancel }) {
  if (!isOpen || !details) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Подтверждение записи</h3>
        <p><strong>Имя:</strong> {details.name}</p>
        <p><strong>Телефон:</strong> {details.phone}</p>
        <p><strong>Услуга:</strong> {details.service}</p>
        <p><strong>Дата:</strong> {details.date}</p>
        <p><strong>Время:</strong> {details.time}</p>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="confirm-button">Подтвердить</button>
          <button onClick={onCancel} className="cancel-button">Отмена</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;

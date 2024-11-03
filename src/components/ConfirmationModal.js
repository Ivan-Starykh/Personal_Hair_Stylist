import React from "react";
import "./ConfirmationModal.css";

function ConfirmationModal({ details, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
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

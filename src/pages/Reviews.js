// 
import React, { useState } from "react";
import "./Reviews.css";

function Reviews() {
  const [reviews, setReviews] = useState([
    { name: "Марина", text: "Отличный мастер, профессиональный подход!" },
    { name: "Анна", text: "Результатом очень довольна! Спасибо!" },
  ]);
  const [newReview, setNewReview] = useState({ name: "", text: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setReviews((prev) => [...prev, newReview]);
      setNewReview({ name: "", text: "" });
    }
  };

  return (
    <section className="reviews">
      <h2>Отзывы</h2>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <h3>{review.name}</h3>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={newReview.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="text"
          placeholder="Ваш отзыв"
          value={newReview.text}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Оставить отзыв</button>
      </form>
    </section>
  );
}

export default Reviews;

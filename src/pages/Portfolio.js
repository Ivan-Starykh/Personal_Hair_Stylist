// import React, { useState } from "react";
// import "./Portfolio.css"

// function Portfolio() {
// 	const [isModalOpen, setIsModalOpen] = useState(false);
// 	const [selectedImage, setSelectedImage] = useState(null);

// 	const images = [
// 		"image1.jpg",
// 		"image2.jpg",
// 		"image3.jpg",
// 	];

// 	const openModal = (image) => {
// 		setSelectedImage(image);
// 		setIsModalOpen(true);
// 	};

// 	const closeModal = () => {
// 		setSelectedImage(null);
// 		setIsModalOpen(false);
// 	};

// 	return (
// 		<section id="portfolio" className="portfolio">
// 			<h2>Портфолио</h2>
// 			<p>Check out some of my latest works!.</p>
// 			<div className="portfolio-gallery">
// 				{images.map((image, index) => (
// 					<img
// 					key={index}
// 					src={image}
// 					alt={'Portfolio ${index + 1}'}
// 					onClick={() => openModal(image)}
// 					className="portfolio-image"
// 					/>
// 				))}
// 			</div>
// 			{isModalOpen && (
// 				<div className="modal" onClick={closeModal}>
// 					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
// 						<img src={selectedImage} alt="Selected work" />
// 						<button className="close-button" onClick={closeModal}>Close</button>
// 					</div>
// 				</div>
// 			)}
// 		</section>
// 	);
// }

// export default Portfolio;
import React, { useState } from "react";
import "./Portfolio.css";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    // setSelectedImage(null);
		const modalContent = document.querySelector(".modal-content");
  modalContent.style.animation = "zoomOut 0.5s forwards";
  setTimeout(() => setSelectedImage(null), 500); // Даем время для завершения анимации
  };

  return (
    <section className="portfolio">
      <h2>Портфолио</h2>
      <div className="gallery">
        {[work1, work2, work3].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Работа ${index + 1}`}
            onClick={() => openImage(image)}
            className="gallery-image"
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeImage}>
          <div className="modal-content">
            <img src={selectedImage} alt="Увеличенное изображение" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;

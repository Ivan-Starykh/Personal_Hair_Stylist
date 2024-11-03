import React from "react";
import "./About.css";
import profileImage from "../assets/profile.jpg"; // добавим фото мастера

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <img src={profileImage} alt="Мастер" className="profile-image" />
        <div className="about-text">
          <h2>Обо мне</h2>
          <p>Привет! Меня зовут Светлана. Я профессиональный парикмахер-стилист с более чем 5-летним опытом в индустрии красоты. Специализируюсь на современных стрижках и окрашивании волос, создавая образы, которые подчеркивают вашу индивидуальность.</p>
          <p>Мой подход к работе — это забота о ваших волосах и использование только лучших материалов и техник. Я всегда стремлюсь понять, что вы хотите видеть в зеркале, и сделать это реальностью.</p>
        </div>
      </div>
    </section>
  );
}

export default About;

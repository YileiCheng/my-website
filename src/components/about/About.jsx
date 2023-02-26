import React from "react";
import "./about.css";
import BLU2 from "../../assets/Blu2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={BLU2} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>University</h5>
              <small>KTH Royal Institute of Technology</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Degree</h5>
              <small>
                Bachelor of Information and Communication Technology
              </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Experience</h5>
              <small>6 Months Internship Experience</small>
            </article>
          </div>

          <p>
            I have experience in both the frontend and the backend. I have been
            involved in areas such as artificial intelligence , gaming industry
            and UX design. I would like to be provided with the opportunity to
            demonstrate my potential and would like to bring my ideas to reality
            and contribute to projects in a professional environment. I want to
            utilize my experience in different fields and combine them to
            actually make a difference in the world.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

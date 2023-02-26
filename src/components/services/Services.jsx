import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>The Experiences I Have</h5>
      <h2>My Experiences</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Software Engineer Intern at Activision Blizzard King</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Worked as a front-end developer to develop and maintain an
                internal platform that aimed to increase the observability and
                discoverability of tools and documentation for internal
                developers at King.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Machine Learning Intern at Automynt AB</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Used my machine learning knowledge to create a classification
                system that could cluster users based on their spending
                behaviors. The model was trained using a transactional dataset.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>HR and Quality Assistant at General Electric</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Helped the HR and Quality manager to organize company flowcharts
                and employment list.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => toggleTab(1)}
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            onClick={() => toggleTab(2)}
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Computer Applications and Information Technology
                </h3>
                <span className="qualification__subtitle">
                  Arizona State University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 Mar - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  PHP and Laravel Bootcamp
                </h3>
                <span className="qualification__subtitle">
                  Host Myanmar Mandalay
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 Nov - 2023 Apr
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Zero to Pro CS Bootcamp(Level-4 + Level-3)
                </h3>
                <span className="qualification__subtitle">
                  Myanmar IT Bootcamp
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 Feb - 2022 Oct
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">High School Graduated</h3>
                <span className="qualification__subtitle">6 Distinctions</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Junior Backend Developer
                </h3>
                <span className="qualification__subtitle">ILBC, Edtech</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 Jun - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Laravel Developer (Internship)
                </h3>
                <span className="qualification__subtitle">
                  Host Myanmar IT Solution
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 May
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  PHP, Laravel On Job Training
                </h3>
                <span className="qualification__subtitle">
                  Host Myanmar Mandalay
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 Feb - 2023 Apr
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Proficient In</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data bx-tada-hover">
            <i class="bx bxl-html5"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data bx-tada-hover">
            <i class="bx bxl-css3"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data bx-tada-hover">
            <i class="bx bxl-javascript"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data bx-tada-hover">
            <i class="bx bxl-bootstrap"></i>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data bx-tada-hover">
            <i class="bx bxl-tailwind-css"></i>
            <div>
              <h3 className="skills__name">TailwindCSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data bx-tada-hover">
            <i class="bx bxl-react"></i>
            <div>
              <h3 className="skills__name">ReactJS</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data bx-tada-hover">
            <i class="bx bxl-vuejs"></i>
            <div>
              <h3 className="skills__name">VueJS</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;

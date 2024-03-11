import React from "react";

const Devops = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Additional Skills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data bx-tada-hover">
            <i class="bx bxl-git"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data bx-tada-hover">
            <i class="bx bxl-github"></i>
            <div>
              <h3 className="skills__name">Github</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data bx-tada-hover">
            <i class="bx bxl-docker"></i>
            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data bx-tada-hover">
            <i class="fa-solid fa-code-merge"></i>
            <div>
              <h3 className="skills__name">CI/CD Development</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data bx-tada-hover">
            <i class="bx bxl-tux"></i>
            <div>
              <h3 className="skills__name">Linux Shell Scripting</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devops;

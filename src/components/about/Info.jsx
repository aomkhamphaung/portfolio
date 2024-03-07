import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 years+ in Web Development</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Working</h3>
        <span className="about__subtitle">1 year+ Working Experience</span>
      </div>

      <div className="about__box">
        <i class="bx bxs-graduation about__icon"></i>
        <h3 className="about__title">Certificates</h3>
        <span className="about__subtitle">20+ Professional Certificates</span>
      </div>
    </div>
  );
};

export default Info;

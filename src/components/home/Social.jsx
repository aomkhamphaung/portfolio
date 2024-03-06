import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="mailto:aomkhamphaung.dev@gmail.com"
        target="blank"
        className="home__social-icon"
      >
        <i class="uil uil-envelope"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/aom-kham-phaung-903291242"
        target="blank"
        className="home__social-icon"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/aomkhamphaung"
        target="blank"
        className="home__social-icon"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;

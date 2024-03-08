import React from "react";
import Swal from "sweetalert2";

const WorkItems = ({ item }) => {
  const detail = () => {
    Swal.fire({
      title: item.title,
      text: "Modal with a custom image.",
      imageUrl: item.image,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };

  return (
    <div className="work__card" key={item.id} onClick={detail}>
      <img src={item.image} className="work__img" alt="" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} target="blank" className="work__button">
        Source Code
        <i class="uil uil-github-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;

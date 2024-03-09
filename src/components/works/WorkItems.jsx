/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Swal from "sweetalert2";

const WorkItems = ({ item }) => {
  const detail = () => {
    Swal.fire({
      title: item.title,
      text: item.description,
      imageUrl: item.image,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "project",
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: !!item.demo_link,
      closeButtonAriaLabel: "Close",
      confirmButtonText: "View Demo",
      cancelButtonText: "Source Code",
      buttonsStyling: false,
      padding: "1.5rem 0rem",
      customClass: {
        confirmButton: "demo__button",
        cancelButton: "repo__button",
        content: "item__content",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(item.demo_link, "_blank");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        window.open(item.repo_link, "_blank");
      }
    });
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} className="work__img" alt="" />
      <h3 className="work__title">{item.title}</h3>
      <a onClick={detail} target="blank" className="work__button">
        View Detail
        <i class="uil uil-arrow-right work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;

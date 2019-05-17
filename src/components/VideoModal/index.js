import React, { useEffect } from "react";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Close from "../Images/Icons/Close";
import Styles from "./styles.module.scss";

export default function VideoModal({ closeClick, closeModal }) {
  useEffect(() => {
    window.onkeydown = function onEscKey(e) {
      if (e.key === "Escape") {
        closeModal();
      }
    };
  });

  return (
    <div className={Styles.modalStyles}>
      <div className={Styles.buttonContainer}>
        <button className={Styles.closeButton} onClick={() => closeModal()}>
          <Close />
        </button>
      </div>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/YLIzhX6pB7g"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      />

      <p className={Styles.title}>What do you think now? </p>
      <a
        href="#your-choices"
        onClick={() => closeClick()}
        style={{ textDecoration: "none" }}
      >
        <button
          style={{ textDecoration: "none" }}
          className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
            ButtonStyles.btnGreen
          } ${ButtonStyles.btnMobile}`}
        >
          Learn how you can help
        </button>
      </a>
      <p>
        <a
          className={Styles.link}
          href="https://climate.nasa.gov/evidence/"
          target="_blank"
        >
          Sorry. I still need more proof
        </a>{" "}
      </p>
    </div>
  );
}

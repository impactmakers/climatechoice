import React, { useEffect } from "react";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Close from "../Images/Icons/Close";
import Styles from "./styles.module.scss";

export default function VideoModal({ closeClick, closeModal }) {
  const closeModalOnEscape = e => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", closeModalOnEscape);
    return () => {
      window.removeEventListener("keydown", closeModalOnEscape);
    };
  }, []);

  return (
    <div className={Styles.modalStyles}>
      <button className={Styles.closeButton} onClick={() => closeModal()}>
        <Close />
      </button>

      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/YLIzhX6pB7g"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
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
          I'm convinced. Show me how I can help
        </button>
      </a>

      <a
        className={Styles.link}
        href="https://climate.nasa.gov/evidence/"
        target="_blank"
      >
        Sorry. I still need more proof
      </a>
    </div>
  );
}

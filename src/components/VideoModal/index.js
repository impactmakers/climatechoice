import React from "react";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./styles.module.scss";

export default function VideoModal() {
  // ToDo: handle esc key to exit modal
  // close button to exit modal
  // refactor & pull components out to be reuseable
  // fix jumping on homepage
  return (
    <div className={Styles.modalStyles}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/YLIzhX6pB7g"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      />

      <p>What do you think now? </p>
      {/* pull this out into separate component eg greenButton / can I pass props to change the size of the button too? makes it more resusable  */}
      <button
        className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
          ButtonStyles.btnGreen
        } ${ButtonStyles.btnMobile}`}
      >
        Learn how you can help
      </button>
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

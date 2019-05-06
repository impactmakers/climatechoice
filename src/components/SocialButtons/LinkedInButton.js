import React from "react";
import styles from "./Styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import LinkedinIcon from "../Images/Icons/LinkedinIcon";

export default function LinkedinButton() {
  return (
    <a
      style={{ textDecoration: "none" }}
      href="https://linkedin.com/climatechoice"
      target="_blank"
    >
      <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
        <input type="hidden" id="hidden-input" value={document.location.href} />
        <div className={styles.logo}>
          <LinkedinIcon fillColor="rgb(0, 127, 177)" />
        </div>
        LinkedIn
      </div>
    </a>
  );
}

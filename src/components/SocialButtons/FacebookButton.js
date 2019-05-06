import React from "react";
import styles from "./Styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import FacebookIcon from "../Images/Icons/FacebookIcon";

export default function FacebookButton() {
  return (
    <a
      style={{ textDecoration: "none" }}
      href="https://facebook.com/climatechoice"
      target="_blank"
    >
      <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
        <input type="hidden" id="hidden-input" value={document.location.href} />
        <div className={styles.logo}>
          <FacebookIcon fillColor="#1877f2" />
        </div>
        Facebook
      </div>
    </a>
  );
}

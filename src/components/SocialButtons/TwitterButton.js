import React from "react";
import styles from "./styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import TwitterIcon from "../Images/Icons/TwitterIcon";

export default function TwitterButton() {
  return (
    <a
      style={{ textDecoration: "none" }}
      href="https://twitter.com/climatechoice"
      target="_blank"
    >
      <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
        <input type="hidden" id="hidden-input" value={document.location.href} />
        <div className={styles.logo}>
          <TwitterIcon fillColor="#76a9ea" />
        </div>
        Twitter
      </div>
    </a>
  );
}

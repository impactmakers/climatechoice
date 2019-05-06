import React from "react";
import styles from "./styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import EmailIcon from "../Images/Icons/EmailIcon";

export default function EmailButton() {
  return (
    <a
      style={{ textDecoration: "none" }}
      href="mailto:?subject=Just saw this new site: Climate Choice &body=I thought you might find this interesting"
    >
      <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
        <input type="hidden" id="hidden-input" value={document.location.href} />
        <div className={styles.logo}>
          <EmailIcon fillColor="#898c92" />
        </div>
        Email
      </div>
    </a>
  );
}

import React from "react";
import styles from "./styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";

export default function SocialButton({ logo, description, onClick }) {
  return (
    <div
      className={`${styles.button} ${buttonStyles.btnSimple}`}
      onClick={onClick}
    >
      <input type="hidden" id="hidden-input" value={document.location.href} />
      <div className={styles.logo}>{logo}</div>
      {description}
    </div>
  );
}

SocialButton.defaultProps = {
  description: "Twitter"
};

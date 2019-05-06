import React from "react";
import styles from "./style.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";

export default function SocialButton({ logo, description }) {
  return (
    <a>
      <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
        <div className={styles.logo}>{logo}</div>
        {description}
      </div>
    </a>
  );
}

SocialButton.defaultProps = {
  description: "Twitter"
};

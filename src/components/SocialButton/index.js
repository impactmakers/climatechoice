import React from "react";
import styles from "./style.module.scss";

export default function SocialButton({ logo, description }) {
  return (
    <div className={styles.button}>
      <div className={styles.logo}>{logo}</div>
      {description}
    </div>
  );
}

SocialButton.defaultProps = {
  description: "Twitter"
};

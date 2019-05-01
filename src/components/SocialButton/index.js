import React from "react";
import styles from "./style.module.scss";

export default function SocialButton({ logo, description }) {
  const Logo = logo;
  return (
    <div className={styles.button}>
      <div style={{ marginRight: "0.5em" }}>
        <Logo />
      </div>
      {description}
    </div>
  );
}

SocialButton.defaultProps = {
  description: "Twitter"
};

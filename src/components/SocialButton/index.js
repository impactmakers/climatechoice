import React from "react";
import styles from "./style.module.scss";

export default function SocialButton({ description }) {
  return <div className={styles.button}>{description}</div>;
}

SocialButton.defaultProps = {
  description: "Twitter"
};

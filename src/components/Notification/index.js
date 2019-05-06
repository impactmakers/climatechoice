import React from "react";
import styles from "./styles.module.scss";

export default function Notification() {
  return (
    <p className={styles.notification} id={styles.notificationslide}>
      Copied to clipboard
    </p>
  );
}

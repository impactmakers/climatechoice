import React from "react";
import styles from "./Styles.module.scss";

export default function Banner() {
  return (
    <div className={styles.bannerStyles}>
      It's World Environment Day 🌎 Please{" "}
      <a href="#share" className={styles.link}>
        share this page
      </a>{" "}
      to help others make better choices to reduce Climate Breakdown
    </div>
  );
}

import React from "react";
import styles from "./Styles.module.scss";

export default function Banner() {
  return (
    <a href="#share" className={styles.link} aria-label={"Share"}>
      <div className={styles.bannerStyles}>
        It's World Environment Day{" "}
        <span role="img" aria-label="Earth">
          🌎
        </span>{" "}
        Please share this page to help others make better choices to reduce
        Climate Breakdown
      </div>
    </a>
  );
}

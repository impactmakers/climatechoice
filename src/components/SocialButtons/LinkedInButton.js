import React from "react";
import { LinkedinShareButton } from "react-share";

import styles from "./Styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import LinkedinIcon from "../Images/Icons/LinkedinIcon";

export default function LinkedinButton() {
  return (
    <LinkedinShareButton
      url="https://climatechoice.co"
      title="Climate Choice"
      description="Discover how changes to your diet can affect Climate Change"
    >
      <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
        <input type="hidden" id="hidden-input" value={document.location.href} />
        <div className={styles.logo}>
          <LinkedinIcon fillColor="rgb(0, 127, 177)" />
        </div>
        LinkedIn
      </div>
    </LinkedinShareButton>
  );
}

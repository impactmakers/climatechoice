import React from "react";
import { FacebookShareButton } from "react-share";
import styles from "./Styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import FacebookIcon from "../Images/Icons/FacebookIcon";

export default function FacebookButton() {
  return (
    <FacebookShareButton
      url="https://climatechoice.co"
      quote="Check out how you can change your diet and positively affect climate change at:"
      hashtag="#climatechange"
    >
      <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
        <input type="hidden" id="hidden-input" value={document.location.href} />
        <div className={styles.logo}>
          <FacebookIcon fillColor="#1877f2" />
        </div>
        Facebook
      </div>
    </FacebookShareButton>
  );
}

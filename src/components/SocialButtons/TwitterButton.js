import React from "react";
import { TwitterShareButton } from "react-share";
import styles from "./styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import TwitterIcon from "../Images/Icons/TwitterIcon";

export default function TwitterButton() {
  return (
    <>
      <TwitterShareButton
        url="https://climatechoice.co"
        title="Check out how you can change your diet and positively affect climate change at"
        via="climatechoice"
        hashtags={["climatechange"]}
      >
        <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
          <input
            type="hidden"
            id="hidden-input"
            value={document.location.href}
          />
          <div className={styles.logo}>
            <TwitterIcon fillColor="#76a9ea" />
          </div>
          Twitter
        </div>
      </TwitterShareButton>
    </>
  );
}

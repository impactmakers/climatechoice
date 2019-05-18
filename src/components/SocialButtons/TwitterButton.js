import React from "react";
import PropTypes from "prop-types";
import { TwitterShareButton } from "react-share";
import styles from "./styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import TwitterIcon from "../Images/Icons/TwitterIcon";

export default function TwitterButton({
  url,
  twitterTitle,
  twitterAccount,
  hashtags,
  currentUrl
}) {
  return (
    <>
      <TwitterShareButton
        url={url}
        title={twitterTitle}
        via={twitterAccount}
        hashtags={hashtags}
      >
        <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
          <input type="hidden" id="tw-hidden-input" value={currentUrl} />
          <div className={styles.logo}>
            <TwitterIcon fillColor="#76a9ea" />
          </div>
          Twitter
        </div>
      </TwitterShareButton>
    </>
  );
}

TwitterButton.defaultProps = {
  url: "https://climatechoice.co/",
  twitterTitle:
    "Check out how you can change your diet and positively affect climate change at",
  twitterAccount: "climatechoice",
  hashtags: ["climatechange"]
};

TwitterButton.propTypes = {
  url: PropTypes.string,
  twitterTitle: PropTypes.string,
  twitterAccount: PropTypes.string,
  hashtags: PropTypes.array
};

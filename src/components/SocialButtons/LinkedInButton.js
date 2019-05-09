import React from "react";
import PropTypes from "prop-types";
import { LinkedinShareButton } from "react-share";

import styles from "./Styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import LinkedinIcon from "../Images/Icons/LinkedinIcon";

export default function LinkedinButton({
  url,
  linkedinTitle,
  linkedinDescription
}) {
  return (
    <LinkedinShareButton
      url={url}
      title={linkedinTitle}
      description={linkedinDescription}
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

LinkedinButton.defaultProps = {
  url: "https://climatechoice.co",
  linkedinTitle: "Climate Choice",
  linkedinDescription:
    "Discover how changes to your diet can affect Climate Change"
};

LinkedinButton.propTypes = {
  url: PropTypes.string,
  linkedinTitle: PropTypes.string,
  linkedinDescription: PropTypes.string
};

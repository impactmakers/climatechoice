import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import EmailIcon from "../Images/Icons/EmailIcon";

export default function EmailButton({ emailSubject, emailBody }) {
  return (
    <a
      style={{ textDecoration: "none" }}
      href={`mailto:?subject=${emailSubject}&body=${emailBody}`}
    >
      <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
        <div className={styles.logo}>
          <EmailIcon fillColor="#898c92" />
        </div>
        Email
      </div>
    </a>
  );
}

EmailButton.defaultProps = {
  emailSubject: "Just saw this new site: Climate Choice",
  emailBody: "I thought you might find this interesting"
};

EmailButton.propTypes = {
  emailSubject: PropTypes.string,
  emailBody: PropTypes.string
};

import React from "react";
import PropTypes from "prop-types";

import { WhatsappShareButton } from "react-share";
import styles from "./Styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import WhatsappIcon from "../../components/Images/Icons/WhatsappIcon";

export default function WhatsappButton({ url, whatsappTitle, currentUrl }) {
  return (
    <WhatsappShareButton url={url} title={whatsappTitle}>
      <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
        <input type="hidden" id="hidden-input" value={currentUrl} />
        <div className={styles.logo}>
          <WhatsappIcon fillColor="#40c351" />
        </div>
        WhatsApp
      </div>
    </WhatsappShareButton>
  );
}

WhatsappButton.defaultProps = {
  url: "https://climatechoice.co",
  whatsappTitle: "check out this new site, Climate Choice"
};

WhatsappButton.propTypes = {
  url: PropTypes.string,
  whatsappTitle: PropTypes.string
};

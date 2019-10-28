import React, { useState } from "react";
import styles from "./styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import CopyLinkIcon from "../Images/Icons/CopyLinkIcon";
import Notification from "../Notification";

export default function CopyLinkButton(props) {
  const [showNotification, setShowNotification] = useState(false);

  function copyLink() {
    const input = document.createElement("input");
    const currentUrl = props.currentUrl;
    const text = currentUrl.split("#")[0];
    document.body.appendChild(input);
    input.value = text;

    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    if (!showNotification) {
      setShowNotification(true);
    }

    setTimeout(() => setShowNotification(false), 3000);
  }

  return (
    <>
      {showNotification && <Notification />}
      <button
        className={`${styles.button} ${buttonStyles.btnSimple}`}
        onClick={copyLink}
      >
        <div className={styles.logo}>
          <CopyLinkIcon fillColor="#16243E" />
        </div>
        Copy Link
      </button>
    </>
  );
}

import React, { useState } from 'react';
import styles from './styles.module.scss';
import buttonStyles from '../../styles/Buttons.module.scss';
import CopyLinkIcon from '../Images/Icons/CopyLinkIcon';
import Notification from '../Notification';

export default function CopyLinkButton() {
  const [showNotification, setShowNotification] = useState(false);

  function copyLink() {
    const input = document.createElement('input'),
      text = window.location.href;

    document.body.appendChild(input);
    input.value = text;
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    if (!showNotification) {
      setShowNotification(true);
    }

    setTimeout(() => setShowNotification(false), 3000);
  }
  return (
    <>
      {showNotification && <Notification />}
      <div
        className={`${styles.button} ${buttonStyles.btnSimple}`}
        onClick={copyLink}
      >
        <input type="hidden" id="hidden-input" value={document.location.href} />
        <div className={styles.logo}>
          <CopyLinkIcon fillColor="#16243E" />
        </div>
        CopyLink
      </div>
    </>
  );
}

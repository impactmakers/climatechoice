import React from 'react';
import styles from './Styles.module.scss';
import buttonStyles from '../../styles/Buttons.module.scss';
import WhatsappIcon from '../../components/Images/Icons/WhatsappIcon';

export default function WhatsappButton() {
  return (
    <a
      style={{ textDecoration: 'none' }}
      href="https://web.whatsapp.com/" // need instruction on what should happen here
      target="_blank"
    >
      <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
        <input type="hidden" id="hidden-input" value={document.location.href} />
        <div className={styles.logo}>
          <WhatsappIcon fillColor="#40c351" />
        </div>
        WhatsApp
      </div>
    </a>
  );
}

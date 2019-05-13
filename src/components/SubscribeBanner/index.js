import React from 'react';
import GlobalStyles from '../../styles/Global.module.scss';
import ButtonStyles from '../../styles/Buttons.module.scss';
import Styles from './Styles.module.scss';

const SubscribeBanner = () => (
  <footer className={Styles.container}>
    <div className={`${GlobalStyles.inner} ${Styles.ctaInner}`}>
      <div className={Styles.ctaContent}>
        <h2 className={Styles.ctaTitle}>Get notified when we launch new choice guides</h2>
        <p className={Styles.ctaText}>
          We're developing more great guides to help you and your friends learn how you to prevent earth's climate breaking down.
        </p>
      </div>
      <div className={Styles.ctaActions}>
        <a
          className={Styles.ctaButton}
          href="/"
          title="Subscribe"
        >
          <button
            className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
              ButtonStyles.btnPrimary
            } ${ButtonStyles.btnMobile}`}
          >
            Subscribe now
          </button>
        </a>

      </div>
    </div>
  </footer>
);

export default SubscribeBanner;

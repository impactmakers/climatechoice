import React from 'react';
import GlobalStyles from '../../styles/Global.module.scss';
import ButtonStyles from '../../styles/Buttons.module.scss';
import Styles from './Styles.module.scss';

const Footer = () => (
  <footer className={Styles.container}>
    <div className={`${GlobalStyles.inner} ${Styles.ctaInner}`}>
      <div className={Styles.ctaContent}>
        <h1 className={Styles.ctaTitle}>Title</h1>
        <p className={Styles.ctaText}>Description</p>
      </div>
      <div className={Styles.ctaActions}>
        <a className={Styles.ctaButton} href="/" title="Main">
          <button
            className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
              ButtonStyles.btnPrimary
            }`}
          >
            Main
          </button>
        </a>
        <a className={Styles.ctaButton} href="/" title="Secondary">
          <button
            className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
              ButtonStyles.btnBordered
            } ${ButtonStyles.btnBorderedWhite} `}
          >
            Secondary
          </button>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

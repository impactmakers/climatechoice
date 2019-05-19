import React from "react";
import GlobalStyles from "../../styles/Global.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";

const Footer = () => (
  <footer className={Styles.container}>
    <div className={`${GlobalStyles.inner} ${Styles.ctaInner}`}>
      <div className={Styles.ctaContent}>
        <h1 className={Styles.ctaTitle}>
          Want to help prevent climate breakdown?
        </h1>
        <p className={Styles.ctaText}>
          Then read our straight-forward guides on choices you can make today to
          help save the planet.
        </p>
      </div>
      <div className={Styles.ctaActions}>
        <a
          className={Styles.ctaButton}
          href="/#your-choices"
          title="View your choices"
        >
          <button
            className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
              ButtonStyles.btnOrange
            } ${ButtonStyles.btnMobile}`}
          >
            Learn about your choices
          </button>
        </a>
        {/* <a className={Styles.ctaButton} href="/" title="Secondary">
          <button
            className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
              ButtonStyles.btnBordered
            } ${ButtonStyles.btnBorderedWhite} `}
          >
            Secondary
          </button>
        </a> */}
      </div>
    </div>
  </footer>
);

export default Footer;

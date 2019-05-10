import React from 'react';
import { Link } from 'gatsby';
import GlobalStyles from '../../styles/Global.module.scss';
import ButtonStyles from '../../styles/Buttons.module.scss';
import Styles from './Styles.module.scss';

const HomeIntro = () => (
  <section className={Styles.container}>
    <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>
          We must cut global emissions in half by 2030 or face{' '}
          <span className={Styles.titleEmphasis}>mass extinctions</span>
        </h1>
        <a className={Styles.ctaButton} href="/join" title="Get started now">
          <button
            className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnLg} ${
              ButtonStyles.btnGreen
            }`}
          >
            Learn how you can help
          </button>
        </a>
        <span className={Styles.ctaSecondary}>
          <Link to="/" title="Learn more">
            Need convinced? Read this
          </Link>
        </span>
      </div>
    </div>
  </section>
);

export default HomeIntro;

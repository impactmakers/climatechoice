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
        <div className={Styles.ctas}>
          <a
            className={Styles.ctaPrimary}
            href="#your-choices"
            title="How you can help prevent climate breakdown"
          >
            <button
              className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
                ButtonStyles.btnGreen
              } ${ButtonStyles.btnMobile}`}
            >
              Learn how you can help
            </button>
          </a>
          <span className={Styles.ctaSecondary}>
            <Link to="#" title="Learn more">
              Need convinced? Watch this
            </Link>
          </span>
        </div>
      </div>
      <div className={Styles.img}>Img here</div>
    </div>
  </section>
);

export default HomeIntro;

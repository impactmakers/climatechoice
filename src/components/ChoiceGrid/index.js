import React from 'react';
import { Link } from 'gatsby';
import GlobalStyles from '../../styles/Global.module.scss';
import Styles from './Styles.module.scss';

const ChoiceGrid = () => (
  <section className={Styles.container}>
    <a name="your-choices" />
    <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
      <h1 className={Styles.title}>
        Choices you can make to help prevent climate breakdown
      </h1>
      <ul className={Styles.choiceGrid}>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceEat}`}>
          <Link className={Styles.choiceContainer} to="/change-how-you-eat">
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img
                  src="../../../../images/Icons/ChoiceEatIcon.svg"
                  alt="Change how you eat"
                />
              </div>

              <img
                className={Styles.choiceChevron}
                src="../../../../images/Icons/ChevronGrayRightIcon.svg"
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Change how <br />
              you eat
            </h2>
            <div className={Styles.choiceMeta}>
              <span className={Styles.choiceReadStatus}>Not read yet</span>
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceEat}`}>
          <Link className={Styles.choiceContainer} to="/change-how-you-travel">
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img
                  src="../../../../images/Icons/ChoiceTravelIcon.svg"
                  alt="Change how you travel"
                />
              </div>

              <img
                className={Styles.choiceChevron}
                src="../../../../images/Icons/ChevronGrayRightIcon.svg"
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Change how <br />
              you travel
            </h2>
            <div className={Styles.choiceMeta}>
              <span className={Styles.choiceReadStatus}>Not read yet</span>
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceRenewable}`}>
          <Link
            className={Styles.choiceContainer}
            to="/choose-renewable-energy"
          >
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img
                  src="../../../../images/Icons/ChoiceRenewableIcon.svg"
                  alt="Choose renewable energy"
                />
              </div>

              <img
                className={Styles.choiceChevron}
                src="../../../../images/Icons/ChevronGrayRightIcon.svg"
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>Choose renewable energy</h2>
            <div className={Styles.choiceMeta}>
              <span className={Styles.choiceReadStatus}>Not read yet</span>
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceEat}`}>
          <Link className={Styles.choiceContainer} to="/use-less-energy">
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img
                  src="../../../../images/Icons/ChoiceTravelIcon.svg"
                  alt="Use less energy"
                />
              </div>

              <img
                className={Styles.choiceChevron}
                src="../../../../images/Icons/ChevronGrayRightIcon.svg"
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Use less <br />
              energy
            </h2>
            <div className={Styles.choiceMeta}>
              <span className={Styles.choiceReadStatus}>Not read yet</span>
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceRenewable}`}>
          <Link className={Styles.choiceContainer} to="/change-your-lifestyle">
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img
                  src="../../../../images/Icons/ChoiceLifestyleIcon.svg"
                  alt="Change your lifestyle"
                />
              </div>

              <img
                className={Styles.choiceChevron}
                src="../../../../images/Icons/ChevronGrayRightIcon.svg"
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Change your <br />
              lifestyle
            </h2>
            <div className={Styles.choiceMeta}>
              <span className={Styles.choiceReadStatus}>Not read yet</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </section>
);

export default ChoiceGrid;

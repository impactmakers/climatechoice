import React from 'react';
import { Link } from 'gatsby';
import Styles from './Styles.module.scss';

const ChoiceGridItems = () => (
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
      <Link className={Styles.choiceContainer} to="/choose-renewable-energy">
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
              src="../../../../images/Icons/ChoiceEnergyIcon.svg"
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
    <li className={`${Styles.choiceGridItem} ${Styles.choiceGridSoon}`}>
      <div className={Styles.choiceContainer} >
        <div className={Styles.choiceHeader}>
          <div className={`${Styles.choiceIcon} ${Styles.choiceSoonIcon}`}>
            <img
              src="../../../../images/Icons/ChoiceSoonIcon.svg"
              alt="More guides coming soon"
            />
          </div>

        </div>
        <h2 className={`${Styles.choiceTitle} ${Styles.choiceSoonTitle}`}>
          Watch this <br />
          space...
        </h2>
        <div className={Styles.choiceMeta}>
          <span className={Styles.choiceReadStatus}>More guides coming soon</span>
        </div>
      </div>
    </li>
  </ul>
);

export default ChoiceGridItems;

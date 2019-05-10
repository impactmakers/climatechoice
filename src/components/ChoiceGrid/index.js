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
            <h2 className={Styles.choiceTitle}>Change how you eat</h2>
            <div className={Styles.choiceMeta}>
              <span className={Styles.choiceReadTime}>4 min read</span>
              <span className={Styles.choiceReadStatus}>Not read yet</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </section>
);

export default ChoiceGrid;

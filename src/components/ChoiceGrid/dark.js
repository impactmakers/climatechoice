import React from 'react';
import GlobalStyles from '../../styles/Global.module.scss';
import Styles from './Styles.module.scss';
import ChoiceGridItems from './items';
import SubscribeBanner from '../../components/SubscribeBanner';

const ChoiceGridDark = () => (
  <section className={`${Styles.container} ${Styles.containerDark}`}>
    <a name="your-choices" />
    <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
      <h1 className={`${Styles.title} ${Styles.titleWhite}`}>
        Discover more choices you can make to help prevent climate breakdown
      </h1>
      <ChoiceGridItems />
    </div>

  </section>
  
);

export default ChoiceGridDark;

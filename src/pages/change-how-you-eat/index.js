import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import GlobalStyles from '../../styles/Global.module.scss';
import ChoiceStyles from '../../styles/Choice.module.scss';
import Styles from './Styles.module.scss';

const ChangeHowYouEatPage = () => (
  <Layout>
    <SEO title="Change How You Eat" keywords={[`Food`, `ClimateChoice`]} />
    <section className={`${ChoiceStyles.banner} ${Styles.banner}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.inner}`}>
        <h1 className={`${Styles.title} ${Styles.introTitle}`}>Title</h1>
        <p className={`${Styles.description} ${Styles.introDescription}`}>
          Content here
        </p>
      </div>
    </section>
    <section className={`${ChoiceStyles.how} ${Styles.how}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.inner}`}>
        <h1>Title</h1>
      </div>
    </section>
  </Layout>
);

export default ChangeHowYouEatPage;

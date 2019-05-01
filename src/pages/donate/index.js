import React from 'react';
import Layout from '../../components/layout';
import Helmet from 'react-helmet';
import GlobalStyles from '../../styles/Global.module.scss';
import Styles from './Styles.module.scss';

const DonatePage = () => (
  <Layout>
    <Helmet>
      <title>Donate</title>
    </Helmet>
    <section className={Styles.container}>
      <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
        <div className={Styles.introContent}>
          <h1 className={`${Styles.title} ${Styles.introTitle}`}>Donate</h1>
          <p className={`${Styles.description} ${Styles.introDescription}`}>
            Content here
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default DonatePage;

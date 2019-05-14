import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import GlobalStyles from '../../styles/Global.module.scss';
import Styles from './Styles.module.scss';
import FooterCta from '../../components/FooterCta';

const DonatePage = () => (
  <Layout>
    <SEO title="Donate" keywords={[`Donate`, `ClimateChoice`]} />
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
    <FooterCta />
  </Layout>
);

export default DonatePage;

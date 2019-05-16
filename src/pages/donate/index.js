import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import GlobalStyles from '../../styles/Global.module.scss';
import Styles from './Styles.module.scss';
import FooterCta from '../../components/FooterCta';

const DonatePage = () => (
  <Layout>
    <SEO title="Donate" keywords={[`Donate`, `ClimateChoice`]} />
    <section
      className={`${GlobalStyles.container} ${GlobalStyles.subpageContainer}`}
    >
      <div className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner}`}>
        <div className={GlobalStyles.subpageContent}>
          <h1 className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}>
            Donate
          </h1>
          <p>Content</p>
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default DonatePage;

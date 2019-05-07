import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import GlobalStyles from '../../styles/Global.module.scss';
import Styles from './Styles.module.scss';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`Contact`, `ClimateChoice`]} />
    <section className={Styles.container}>
      <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
        <div className={Styles.introContent}>
          <h1 className={`${Styles.title} ${Styles.introTitle}`}>
            Get in touch
          </h1>
          <p className={`${Styles.description} ${Styles.introDescription}`}>
            Content here
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;

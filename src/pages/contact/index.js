import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import GlobalStyles from '../../styles/Global.module.scss';
import Styles from './Styles.module.scss';
import FooterCta from '../../components/FooterCta';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`Contact`, `ClimateChoice`]} />
    <section
      className={`${GlobalStyles.container} ${GlobalStyles.subpageContainer}`}
    >
      <div className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner}`}>
        <div className={GlobalStyles.subpageContent}>
          <h1 className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}>
            Get in touch
          </h1>

          <p>
            If you have any feedback or would like to contribute feel free to{' '}
            <a href="mailto:yourclimatechoice@gmail.com" title="Email us">
              email
            </a>{' '}
            or{' '}
            <a
              href="https://twitter.com/climatechoice"
              title="Tweet @climatechoice"
            >
              tweet us
            </a>
            . If you’re interested in working on your own project to raise
            awareness of the climate breakdown issue and help people to take
            action. Then please{' '}
            <a href="https://techimpactmakers.com" title="Impact Makers">
              {' '}
              join us in the Impact Makers
            </a>{' '}
            community!
          </p>
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default ContactPage;

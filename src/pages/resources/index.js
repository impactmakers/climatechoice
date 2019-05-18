import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import FooterCta from "../../components/FooterCta";

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" keywords={[`Resources`, `ClimateChoice`]} />
    <section
      className={`${GlobalStyles.container} ${GlobalStyles.subpageContainer}`}
    >
      <div className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner}`}>
        <div className={GlobalStyles.subpageContent}>
          <h1 className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}>
            Resources
          </h1>
          <p>Content here</p>
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default ResourcesPage;

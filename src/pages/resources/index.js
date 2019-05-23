import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
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
          </h1>{" "}
          <p>
            We're still working on our list of handy climate breakdown
            resources. For now why not checkout the{" "}
            <Link to="/#your-choices" title="Go home">
              choices you can make today to help prevent climate breakdown
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default ResourcesPage;

import React from "react";
import { Link } from "gatsby";
import GlobalStyles from "../styles/Global.module.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FooterCta from "../components/FooterCta";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page not found" />
    <section
      className={`${GlobalStyles.container} ${GlobalStyles.subpageContainer}`}
    >
      <div className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner}`}>
        <div className={GlobalStyles.subpageContent}>
          <h1 className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}>
            Sorry, we couldn't find that page
          </h1>
          <p>
            You just hit a page that doesn&#39;t exist... please{" "}
            <Link to="/" title="Go back home">
              go back home
            </Link>{" "}
            or try one of the links below.
          </p>
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default NotFoundPage;

import React from "react";
import { graphql } from "gatsby";
import HomeIntro from "../components/HomeIntro";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ChoiceGrid from "../components/ChoiceGrid";
import ShareSocialCta from "../components/ShareSocialCta";
import shareConfig from "../configs/pages/homepageConfig";

class HomePage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO keywords={[`ClimateChoice`]} />

        <HomeIntro />
        <ChoiceGrid />
        <ShareSocialCta {...shareConfig} />
      </Layout>
    );
  }
}

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

import React from "react";
import { graphql } from "gatsby";
import HomeIntro from "../components/HomeIntro";
import Layout from "../components/layout";
import SEO from "../components/seo";

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location}>
        <SEO keywords={[`ClimateChoice`]} />

        <HomeIntro />
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

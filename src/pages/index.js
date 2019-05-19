import React from "react";
import { Link } from "gatsby";
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
        <SEO
          keywords={[
            `help prevent climate change`,
            `climate change what can i do`,
            `climate change what can you do`,
            `global warming what can we do`,
            `global warming what can i do`,
            `climate change how to stop it`,
            `climate change how to make a difference`,
            `climate change buy less`,
            `climate change consumerism`,
            `climate change how can i help`,
            `prevent climate breakdown`,
            `climate change independent life`,
            `climate change how to solve it`,
            `Change your lifestyle`,
            `ClimateChoice`,
            `climate change`,
            `climate breakdown`,
            `global warming`,
            `global warming solutions`,
            `Climate change the facts`,
            `climate change solutions`
          ]}
        />

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

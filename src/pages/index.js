import React from "react";
import { graphql } from "gatsby";
import HomeIntro from "../components/HomeIntro";
import EarthyShare from "../components/EarthyShare";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ChoiceGrid from "../components/ChoiceGrid";

import ShareSocialCta from "../components/ShareSocialCta";
import shareConfig from "../configs/pages/homepageConfig";
import SuccessBanner from "../components/SuccessBanner";

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
        <SuccessBanner />
        <EarthyShare />
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

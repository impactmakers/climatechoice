import React from 'react';
import { graphql } from 'gatsby';
import HomeIntro from '../components/HomeIntro';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ChoiceGrid from '../components/ChoiceGrid/light';
import ShareSocialCta from '../components/ShareSocialCta';
import shareConfig from '../configs/pages/homePageConfig';
import SubscribeBanner from '../components/SubscribeBanner';

class HomePage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO keywords={[`ClimateChoice`]} />

        <HomeIntro />
        <ChoiceGrid />
        <SubscribeBanner />
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

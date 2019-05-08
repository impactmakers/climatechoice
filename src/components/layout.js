import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterCta from "../components/FooterCta";
import ShareSocialCta from "../components/ShareSocialCta";
import "../styles/normalize.css";

import homePageConfig from "../configs/pages/homepageConfig";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>Climate Choice</title>
        </Helmet>

        <Navbar />
        <main>{children}</main>
        <ShareSocialCta {...homePageConfig} />
        <FooterCta />
        <Footer />
      </div>
    );
  }
}

export default Layout;

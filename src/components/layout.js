import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterCta from "../components/FooterCta";
import SpreadMessageCTA from "../components/SpreadMessageCTA";
import "../styles/normalize.css";

import homepageCTA from "../configs/pages/homepageCTA";

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

        <FooterCta />
        <Footer />
        <SpreadMessageCTA
          socialButtons={homepageCTA.socialButtons}
          ctaCopy={homepageCTA.ctaCopy}
          ctaTitle={homepageCTA.ctaTitle}
          socialTitle={homepageCTA.socialTitle}
          socialCopy={homepageCTA.socialCopy}
        />
      </div>
    );
  }
}

export default Layout;

import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterCta from "../components/FooterCta";
import Notification from "../components/Notification";
import SpreadMessageCTA from "../components/SpreadMessageCTA";
import "../styles/normalize.css";

import homePageConfig from "../configs/pages/homepageConfig";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false
    };
  }

  closeNotification = () => {
    setTimeout(() => {
      if (this.state.alert) {
        this.setState({ alert: false });
      }
    }, 3000);
  };

  showNotification = () => {
    if (!this.state.alert) {
      this.setState({ alert: true });
    }
    this.closeNotification();
  };

  render() {
    const { alert } = this.state;
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
          socialButtons={homePageConfig.socialButtons}
          ctaCopy={homePageConfig.ctaCopy}
          ctaTitle={homePageConfig.ctaTitle}
          socialTitle={homePageConfig.socialTitle}
          socialCopy={homePageConfig.socialCopy}
        >
          {alert && <Notification />}
        </SpreadMessageCTA>
      </div>
    );
  }
}

export default Layout;

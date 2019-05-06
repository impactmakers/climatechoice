import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterCta from "../components/FooterCta";
import Notification from "../components/Notification";
import SpreadMessageCTA from "../components/SpreadMessageCTA";
import "../styles/normalize.css";

import homepageCTA from "../configs/pages/homepageCTA";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false
    };
  }

  closeModal = () => {
    setTimeout(() => {
      if (this.state.alert) {
        this.setState({ alert: false });
      }
    }, 3000);
  };

  copyUrl = () => {
    const input = document.createElement("input"),
      text = window.location.href;

    document.body.appendChild(input);
    input.value = text;
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    if (!this.state.alert) {
      this.setState({ alert: true });
    }
    this.closeModal();
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
          socialButtons={homepageCTA.socialButtons}
          ctaCopy={homepageCTA.ctaCopy}
          ctaTitle={homepageCTA.ctaTitle}
          socialTitle={homepageCTA.socialTitle}
          socialCopy={homepageCTA.socialCopy}
          onClick={this.copyUrl}
        >
          {alert && <Notification />}
        </SpreadMessageCTA>
      </div>
    );
  }
}

export default Layout;

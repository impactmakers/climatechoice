import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import FooterCta from '../components/FooterCta';
import ShareSocialCta from '../components/ShareSocialCta';
import homePageConfig from '../configs/pages/homepageConfig';

import '../styles/normalize.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>Climate Choice</title>
          <script
            type="text/javascript"
            src="//fast.fonts.net/jsapi/7a7812b4-b519-456a-b42f-2ebffdee5e70.js"
          />
        </Helmet>

        <Navbar />
        <main>{children}</main>

        <FooterCta />
        <Footer />
      </div>
    );
  }
}

export default Layout;

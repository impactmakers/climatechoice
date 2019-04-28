import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FooterCta from '../components/FooterCta';
import '../styles/normalize.css';
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
      </div>
    );
  }
}

export default Layout;

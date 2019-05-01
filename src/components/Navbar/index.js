import React from 'react';
import { Link } from 'gatsby';
import Logo from '../Images/Logos/LogoOnDark';
import GlobalStyles from '../../styles/Global.module.scss';
import ButtonStyles from '../../styles/Buttons.module.scss';
import Styles from './Styles.module.scss';

const Navbar = class extends React.Component {
  render() {
    return (
      <nav
        className={Styles.container}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
          <div className={Styles.logo}>
            <Link to="/" title="Go back home">
              <Logo />
            </Link>
          </div>

          <ul className={Styles.navList}>
            <li className={Styles.navItem}>
              <Link to="/resources" title="Discover climate change resources">
                Resources
              </Link>
            </li>
            <li className={Styles.navItem}>
              <Link
                to="/contact#contribute"
                title="Contribute to ClimateChoice"
              >
                Contribute
              </Link>
            </li>
            <li className={Styles.navItem}>
              <Link to="/donate" title="Donate to climate causes">
                Donate
              </Link>
            </li>
            <li className={`${Styles.navItem} ${Styles.navItemAction}`}>
              <Link
                to="#your-choices"
                className={Styles.ctaButton}
                title="Secondary"
              >
                <button
                  className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnSm} ${
                    ButtonStyles.btnHeader
                  } `}
                >
                  View your choices
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Navbar;

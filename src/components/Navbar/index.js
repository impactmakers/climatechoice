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
          <ul
            className={Styles.navList}
          >
          <li className={Styles.navItem}>
            <Link title="Title" to="/about">
              About
            </Link>
          </li>
          <li className={Styles.navItem}>
            <Link title="Read our blog" to="/blog">
              Blog
            </Link>
            </li>
          <li className={`${Styles.navItem} ${Styles.navItemAction}`}>
            <Link
              title="Title"
              to="/contact"
            >
              Contact
            </Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
};

export default Navbar;

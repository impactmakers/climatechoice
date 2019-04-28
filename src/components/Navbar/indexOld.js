import React from 'react';
import { Link } from 'gatsby';
import GlobalStyles from '../../styles/Global.module.scss';
import Styles from './Styles.module.scss';
import LogoSmall from '../Images/Logos/LogoSmall';

const Navbar = () => (
  <header className={Styles.container}>
    <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
      <h1 className={Styles.logo}>
        <Link to="/" title="Go back home">
          <LogoSmall />
        </Link>
      </h1>
      <nav className={Styles.nav}>
        <ul className={Styles.navList}>
          <li className={Styles.navListItem}>
            <Link to="/blog" title="Read our blog">
              Blog
            </Link>
          </li>
          <li className={Styles.navListItem}>
            <a title="Login to your account" href="/login">
              Login
            </a>
          </li>
          <li className={`${Styles.navListItem} ${Styles.navListItemAction}`}>
            <a title="Start saving now" href="/join">
              Get started
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;

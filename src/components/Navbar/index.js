import React, { useState } from "react";
import MenuIcon from "../Images/Icons/MenuIcon";
import GlobalStyles from "../../styles/Global.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import Logo from "./LogoOnDark.svg";
import { Link, FormattedMessage } from "gatsby-plugin-intl";
import { injectIntl } from "react-intl";

const Navbar = ({ intl }) => {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav(e) {
    e.preventDefault();
    setNavOpen(prevValue => !prevValue);
  }

  return (
    <nav
      className={Styles.container}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
        <div className={Styles.logo}>
          <Link to="/" title={intl.formatMessage({ id: "link_to_root" })}>
            <img src={Logo} alt="ClimateChoice" />
          </Link>
        </div>

        <button
          onClick={toggleNav}
          className={`${ButtonStyles.btnSimple} ${Styles.navToggle}`}
        >
          Menu
          <MenuIcon />
        </button>

        <ul
          className={`${Styles.navList} ${navOpen ? Styles.navListOpen : ""}`}
        >
          <li className={`${Styles.navItem} ${Styles.navItemLink}`}>
            <Link
              to="/contact#contribute"
              title={intl.formatMessage({ id: "contribute" })}
            >
              {intl.formatMessage({ id: "contribute" })}
            </Link>
          </li>
          <li className={`${Styles.navItem} ${Styles.navItemLink}`}>
            <Link to="/donate" title={intl.formatMessage({ id: "donate" })}>
              <FormattedMessage id="donate" />
            </Link>
          </li>
          <li className={`${Styles.navItem} ${Styles.navItemAction}`}>
            <a href="/#your-choices" className={Styles.ctaButton}>
              <button
                className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnSm} ${
                  ButtonStyles.btnHeader
                } `}
              >
                <FormattedMessage id="choices" />
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default injectIntl(Navbar);

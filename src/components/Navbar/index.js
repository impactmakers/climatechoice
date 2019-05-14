import React, { useState } from "react";
import { Link } from "gatsby";
import MenuIcon from "../Images/Icons/MenuIcon";
import GlobalStyles from "../../styles/Global.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import Logo from "./LogoOnDark.svg";

function Navbar() {
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
          <Link to="/" title="Go back home">
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
            <Link to="/resources" title="Discover climate change resources">
              Resources
            </Link>
          </li>
          <li className={`${Styles.navItem} ${Styles.navItemLink}`}>
            <Link to="/contact#contribute" title="Contribute to ClimateChoice">
              Contribute
            </Link>
          </li>
          <li className={`${Styles.navItem} ${Styles.navItemLink}`}>
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

export default Navbar;

import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";
import GlobalStyles from "../../styles/Global.module.scss";
import ChoiceStyles from "../../styles/Choice.module.scss";
import Styles from "./Styles.module.scss";
import HowIcon from "../Images/Icons/HowIcon.svg";

const ChoiceSupport = () => (
  <section className={`${ChoiceStyles.actions} ${Styles.actions}`}>
    <div className={`${GlobalStyles.inner} ${ChoiceStyles.actionsInner}`}>
      <div
        className={`${ChoiceStyles.actionsContent} ${Styles.actionsContent}`}
      >
        <h1 className={`${ChoiceStyles.actionsTitle} ${Styles.actionsTitle}`}>
          Help change the system
        </h1>
      </div>
      <div className={`${ChoiceStyles.action} ${Styles.action}`}>
        <div
          className={`${ChoiceStyles.actionContent} ${Styles.actionContent}`}
        >
          <h2 className={`${ChoiceStyles.actionTitle} ${Styles.actionTitle}`}>
            Support the people, groups and parties who prioritise the planet
          </h2>
          <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
            All global warming could be helped by changes to laws across the
            world which prioritise the planet. Find your local candidates who
            promise to prioritise the planet and support them.
          </p>
          <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
            Get involved on a grassroots level with activist groups and
            charities trying to raise awareness.
          </p>
          <h3
            className={`${ChoiceStyles.actionHowTitle} ${
              Styles.actionHowTitle
            }`}
          >
            <img src={HowIcon} alt="How to do more" />
            How can I do even more?
          </h3>
          <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
            Become a vocal advocate of helping prevent climate breakdown. You
            could stand as a political candidate prioritising the planet, join
            an activist group or charity.
          </p>
          <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
            Why not start your own business or charity trying to fix a problem
            associated with climate change.
            {/* <OutboundLink href="#" title="?">
              There are plenty of opportunities
            </OutboundLink> */}
          </p>
          <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
            Or simply{" "}
            <a href="#share" title="?">
              spread the word
            </a>{" "}
            to your friends and family, educate them on the issues and{" "}
            <a href="/#your-choices" title="View your choices">
              the choices they can make to help
            </a>
            .
          </p>
        </div>
        <div className={`${ChoiceStyles.actionAside} ${Styles.actionAside}`}>
          <div
            className={`${ChoiceStyles.actionAsideContainer} ${
              Styles.actionAsideContainer
            }`}
          >
            <h3
              className={`${ChoiceStyles.actionAsideTitle} ${
                Styles.actionAsideTitle
              }`}
            >
              Find who to support
            </h3>
            <ul
              className={`${ChoiceStyles.actionAsideList} ${
                Styles.actionAsideList
              }`}
            >
              <li>
                <OutboundLink
                  href="https://www.google.com/search?ei=n2vhXLqtNcrIwALL66rABw&q=climate+change+policy&oq=climate+change+policy&gs_l=psy-ab.3..0i71l8.0.0..136431...0.0..0.0.0.......0......gws-wiz.0ZFDhV_5Iuw"
                  title="Find political party climate policies"
                >
                  Search for 'climate change policy + party name' →
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="https://rebellion.earth/act-now/local-groups/"
                  title="Extinction Rebellion local groups"
                >
                  Find climate activism groups near you →
                </OutboundLink>
              </li>
              <li>
                <Link to="/donate#causes" title="?">
                  Find charities and causes to support →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ChoiceSupport;

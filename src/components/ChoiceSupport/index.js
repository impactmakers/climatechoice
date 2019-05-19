import React from 'react';
import { Link } from 'gatsby';
import GlobalStyles from '../../styles/Global.module.scss';
import ChoiceStyles from '../../styles/Choice.module.scss';
import Styles from './Styles.module.scss';

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
            <img
              src="../../../../images/Icons/HowIcon.svg"
              alt="How to do more"
            />
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
            <a href="#" title="?">
              There are plenty of opportunities
            </a>
            !
          </p>
          <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
            Or simply{' '}
            <a href="#share" title="?">
              spread the word
            </a>{' '}
            to your friends and family, educate them on the issues and{' '}
            <a href="/#your-choices" title="?">
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
                <a href="#" title="?">
                  Learn which parties & politicians prioritise the planet →
                </a>
              </li>
              <li>
                <a href="#" title="?">
                  Find activist groups near you →
                </a>
              </li>
              <li>
                <a href="#" title="?">
                  Find charities to support →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ChoiceSupport;

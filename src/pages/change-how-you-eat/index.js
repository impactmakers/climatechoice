import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import GlobalStyles from '../../styles/Global.module.scss';
import ChoiceStyles from '../../styles/Choice.module.scss';
import ButtonStyles from '../../styles/Buttons.module.scss';
import Styles from './Styles.module.scss';

const ChangeHowYouEatPage = () => (
  <Layout>
    <SEO title="Change How You Eat" keywords={[`Food`, `ClimateChoice`]} />
    <section className={`${ChoiceStyles.banner} ${Styles.banner}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.inner}`}>
        <div
          className={`${ChoiceStyles.bannerContent} ${Styles.bannerContent}`}
        >
          <h1 className={`${ChoiceStyles.bannerTitle} ${Styles.bannerTitle}`}>
            Change how you eat to help prevent climate change
          </h1>
          <p className={`${ChoiceStyles.bannerDesc} ${Styles.bannerDesc}`}>
            <b>26%</b> of global greenhouse-gas emissions come from the
            production and waste of food and drink products.
          </p>

          <div className={ChoiceStyles.bannerActions}>
            <a
              className={ChoiceStyles.bannerCtaPrimary}
              href="#actions"
              title="See how you can take action"
            >
              <button
                className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
                  ButtonStyles.btnGreen
                } ${ButtonStyles.btnMobile}`}
              >
                Learn what you can do
              </button>
            </a>
            <div className={ChoiceStyles.bannerCtaSecondary}>
              <a href="#how" title="How it happens">
                Discover how it happens
              </a>
            </div>
          </div>
        </div>
        <div className={`${ChoiceStyles.bannerImg} ${Styles.bannerImg}`}>
          Image
        </div>
      </div>
    </section>
    <section className={`${ChoiceStyles.how} ${Styles.how}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.howInner}`}>
        <div className={`${ChoiceStyles.howContent} ${Styles.howContent}`}>
          <h1 className={`${ChoiceStyles.howTitle} ${Styles.howTitle}`}>
            How food contributes to climate breakdown
          </h1>
          <ol
            className={`${ChoiceStyles.choiceList} ${ChoiceStyles.howList} ${
              Styles.howList
            }`}
          >
            <li>
              When livestock digests their food they burp up methane gas. Manure
              and rice paddies are also big contributors to methane in the
              atmosphere.
            </li>
            <li>
              Farm vehicles and machinery run on fossil fuels which put carbon
              into the atmosphere, most fertilizers used release nitrous oxide.{' '}
            </li>
            <li>
              We waste ⅓ of all food. That means we’ve unnecessarily used vital
              energy to produce it, releasing greenhouse gases in the process -
              and when it’s dumped it rots becoming methane gas.
            </li>
            <li>
              Forests are regularly cleared around the word for use by farms and
              livestock resulting in lots of carbon being released.
            </li>
          </ol>
        </div>
        <div className={`${ChoiceStyles.howImg} ${Styles.howImg}`}>Image</div>
      </div>
    </section>
    <section className={`${ChoiceStyles.stops} ${Styles.stops}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.stopsInner}`}>
        <div className={`${ChoiceStyles.stopsImg} ${Styles.stopsImg}`}>
          <h1 className={`${ChoiceStyles.stopsTitle} ${Styles.stopsTitle}`}>
            What stops us from changing how we eat?
          </h1>
        </div>
        <div className={`${ChoiceStyles.stopsContent} ${Styles.stopsContent}`}>
          <div
            className={`${ChoiceStyles.stopsListContainer} ${
              Styles.stopsListContainer
            }`}
          >
            <ol
              className={`${ChoiceStyles.choiceList} ${
                ChoiceStyles.stopsList
              } ${Styles.stopsList}`}
            >
              <li>
                Food choices with a lower carbon footprint are usually more
                expensive.
              </li>
              <li>
                We enjoy the taste and experience of consuming meat and dairy
                products so much that we can’t bring ourselves to quit them.
              </li>
              <li>
                Acting on climate change represents a trade-off between
                short-term and long-term benefits, which is the hardest
                trade-off for people to make. Ignoring it in the short-term is
                easy as we don’t have to make any personal sacrifices.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ChangeHowYouEatPage;

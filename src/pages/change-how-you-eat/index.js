import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import ChoiceSupport from '../../components/ChoiceSupport';
import SEO from '../../components/seo';
import GlobalStyles from '../../styles/Global.module.scss';
import ChoiceStyles from '../../styles/Choice.module.scss';
import ButtonStyles from '../../styles/Buttons.module.scss';
import Styles from './Styles.module.scss';
import ShareSocialCta from '../../components/ShareSocialCta';
import shareConfig from '../../configs/pages/choiceEatConfig';
import ChoiceGridOnChoice from '../../components/ChoiceGrid/onChoice';
import BannerImg from '../../components/Images/Graphics/choiceBannerEat.svg';
import HowIcon from '../../components/Images/Icons/HowIcon.svg';

const ChangeHowYouEatPage = () => (
  <Layout>
    <SEO
      title="Change how you eat to help prevent climate change"
      description="Learn how you can change how you eat to help prevent earth's climate breaking down."
      image="https://climatechoice.netlify.com/images/Seo/eat.jpg"
      keywords={[
        `Food`,
        `climate change food`,
        `prevent climate change food`,
        `climate change food waste`,
        `climate change meat`,
        `Change how you eat`,
        `ClimateChoice`,
        `climate change`,
        `climate breakdown`,
        `global warming`,
        `global warming solutions`,
        `Climate change the facts`,
        `climate change solutions`
      ]}
    />
    <section className={`${ChoiceStyles.banner} ${Styles.banner}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.inner}`}>
        <div
          className={`${ChoiceStyles.bannerContent} ${Styles.bannerContent}`}
        >
          <h1 className={`${ChoiceStyles.bannerTitle} ${Styles.bannerTitle}`}>
            Change how you eat to help prevent climate breakdown
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
          <img
            src={BannerImg}
            alt="Yomo"
            className={`${ChoiceStyles.bannerImgShadow} ${
              Styles.bannerImgShadow
            }`}
          />
        </div>
      </div>
    </section>
    <section className={`${ChoiceStyles.cba} ${Styles.cba}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.cbaInner}`}>
        Don't have time?{' '}
        <a
          className={ChoiceStyles.cbaAction}
          href="#tldr"
          title="Read a summary"
        >
          Get a quick summary
        </a>
      </div>
    </section>
    <section className={`${ChoiceStyles.how} ${Styles.how}`}>
      <a name="how" />
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
              into the atmosphere.
            </li>
            <li>Most fertilizers used in farming release nitrous oxide.</li>
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
        {/* <div className={`${ChoiceStyles.howImg} ${Styles.howImg}`}>Image</div> */}
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
                The way we eat today is percieved as normal, with changing comes
                social pressure to return to 'normal' eating practices.
              </li>
              <li>
                Often it's hard to know exactly what you should and shouldn't
                eat if you want to reduce your carbon footprint.
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
    <section className={`${ChoiceStyles.actions} ${Styles.actions}`}>
      <a name="actions" />
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.actionsInner}`}>
        <div
          className={`${ChoiceStyles.actionsContent} ${Styles.actionsContent}`}
        >
          <h1 className={`${ChoiceStyles.actionsTitle} ${Styles.actionsTitle}`}>
            What you can do now
          </h1>
        </div>
        <div className={`${ChoiceStyles.action} ${Styles.action}`}>
          <div
            className={`${ChoiceStyles.actionContent} ${Styles.actionContent}`}
          >
            <h2 className={`${ChoiceStyles.actionTitle} ${Styles.actionTitle}`}>
              The easiest thing to do is to consume less food with a high carbon
              footprint
            </h2>
            <p className={`${ChoiceStyles.actionDesc} ${Styles.actionDesc}`}>
              The biggest impact can be had if you{' '}
              <b>eat less animal products — in particular meat and dairy</b>,
              however all purchased food items have a carbon footprint.{' '}
              <b>If you’re really commited go vegan</b>. Try to only buy items
              with <b>sustainable, or no packaging</b>, and <b>buy local</b> so
              your food isn’t travelling around the world.
            </p>
            <h3
              className={`${ChoiceStyles.actionHowTitle} ${
                Styles.actionHowTitle
              }`}
            >
              <img src={HowIcon} alt="How it helps" />
              How much would this help?
            </h3>
            <p className={`${ChoiceStyles.actionDesc} ${Styles.actionDesc}`}>
              If we all did this, demand for harmful food and drink products
              would go down causing the supply chain to shrink. Since we’d be
              eating food with a lower carbon footprint, demand for those
              products would rise, causing prices to drop due to increased
              supply and competition.
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
                Need help changing?
              </h3>
              <ul
                className={`${ChoiceStyles.actionAsideList} ${
                  Styles.actionAsideList
                }`}
              >
                <li>
                  <a
                    href="https://www.bbc.com/news/science-environment-46459714"
                    title="Food Carbon Footprint Calculator"
                  >
                    Calculate your foods carbon footprint →
                  </a>
                </li>
                {/* <li>
                  <a href="#" title="?">
                    Learn how to spot food and drink with a high carbon
                    footprint →
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`${ChoiceStyles.action} ${Styles.action} ${
            ChoiceStyles.actionAnother
          }`}
        >
          <div
            className={`${ChoiceStyles.actionContent} ${Styles.actionContent}`}
          >
            <h2 className={`${ChoiceStyles.actionTitle} ${Styles.actionTitle}`}>
              STOP wasting food. If something does go to waste make sure it’s
              recycled
            </h2>
            <p className={`${ChoiceStyles.actionDesc} ${Styles.actionDesc}`}>
              Be more conscious when you shop and try to{' '}
              <b>only buy what you’re sure will be consumed</b>. When you have
              food or packaging that must be dumped <b>recycle</b> it. Make sure
              you’re aware of the{' '}
              <a href="#" title="?">
                correct recycling procedures where you live
              </a>
              .
            </p>
            <h3
              className={`${ChoiceStyles.actionHowTitle} ${
                Styles.actionHowTitle
              }`}
            >
              <img src={HowIcon} alt="How it helps" />
              How much would this help?
            </h3>
            <p className={`${ChoiceStyles.actionDesc} ${Styles.actionDesc}`}>
              Roughly 1/3 of food each year goes to waste. If we all became more
              efficient with our food, less would need to be produced and less
              would be left to rot - reducing greenhouse emissions.
            </p>
          </div>
        </div>
      </div>
    </section>
    <ShareSocialCta {...shareConfig} />
    <ChoiceSupport />
    <section className={`${ChoiceStyles.tldr} ${Styles.tldr}`}>
      <a name="tldr" />
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.tldrInner}`}>
        <div className={`${ChoiceStyles.tldrImg} ${Styles.tldrImg}`} />
        <div className={`${ChoiceStyles.tldrContent} ${Styles.tldrContent}`}>
          <div
            className={`${ChoiceStyles.tldrListContainer} ${
              Styles.tldrListContainer
            }`}
          >
            <h1 className={`${ChoiceStyles.tldrTitle} ${Styles.tldrTitle}`}>
              Too long; didn't read?
            </h1>
            <p
              className={`${ChoiceStyles.tldrSubtitle} ${Styles.tldrSubtitle}`}
            >
              We’re killing the planet. 26% of dangerous greenhouse gas
              emissions enter our atmosphere because of the way we eat and
              drink. To reduce these we must:
            </p>
            <ul className={`${ChoiceStyles.tldrList} ${Styles.tldrList}`}>
              <li>Eat less food with a high carbon footprint</li>
              <li>Stop wasting food and recycle</li>
              <li>Vote for those who prioritize the planet</li>
              <li>
                <a href="#share" alt="Spread the word">
                  Spread the word
                </a>{' '}
                so others make changes too
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <ChoiceGridOnChoice />
  </Layout>
);

export default ChangeHowYouEatPage;

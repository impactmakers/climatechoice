import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../../components/layout";
import ChoiceSupport from "../../components/ChoiceSupport";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import ChoiceStyles from "../../styles/Choice.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import ShareSocialCta from "../../components/ShareSocialCta";
import shareConfig from "../../configs/pages/choiceEatConfig";
import ChoiceGridOnChoice from "../../components/ChoiceGrid/onChoice";
import BannerImg from "../../components/Images/Graphics/choiceBannerEat.svg";
import HowIcon from "../../components/Images/Icons/HowIcon.svg";
import EarthyShare from "../../components/EarthyShare";
import SuccessBanner from "../../components/SuccessBanner";

const ChangeHowYouEatPage = () => (
  <Layout>
    <SEO
      title="Change how you eat to help prevent climate change"
      description=" 26% of harmful greenhouse gas emissions come from the production and waste of food and drink. Learn how you can help prevent earth's climate breaking down by making simple changes."
      image="https://climatechoice.co/images/Seo/eat.jpg"
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
            <b>26%</b> of global greenhouse gas emissions come from the
            production and waste of food and drink products.
          </p>

          <div className={ChoiceStyles.bannerActions}>
            <a
              className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
                ButtonStyles.btnBanner
              } ${ButtonStyles.btnMobile}`}
              href="#actions"
            >
              Learn what you can do
            </a>
            <div className={ChoiceStyles.bannerCtaSecondary}>
              <a href="#how">Discover how it happens</a>
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
        Short on time?{" "}
        <a
          className={ChoiceStyles.cbaAction}
          href="#tldr"
          title="Read a summary"
        >
          Get a quick summary
        </a>
      </div>
    </section>
    <section
      className={`${ChoiceStyles.how} ${Styles.how}`}
      id="how"
      aria-label={"How"}
    >
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.howInner}`}>
        <div className={`${ChoiceStyles.howContent} ${Styles.howContent}`}>
          <h2 className={`${ChoiceStyles.howTitle} ${Styles.howTitle}`}>
            How food contributes to climate breakdown
          </h2>
          <ol
            className={`${ChoiceStyles.choiceList} ${ChoiceStyles.howList} ${
              Styles.howList
            }`}
          >
            <li>
              Livestock burp up methane gas while digesting their food. Manure
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
              Forests are regularly cleared around the world for use by farms
              and livestock resulting in lots of carbon being released.
            </li>
          </ol>
        </div>
        {/* <div className={`${ChoiceStyles.howImg} ${Styles.howImg}`}>Image</div> */}
      </div>
    </section>
    <section className={`${ChoiceStyles.stops} ${Styles.stops}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.stopsInner}`}>
        <div className={`${ChoiceStyles.stopsImg} ${Styles.stopsImg}`}>
          <h2 className={`${ChoiceStyles.stopsTitle} ${Styles.stopsTitle}`}>
            What stops us from changing how we eat?
          </h2>
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
                The way we eat today is perceived as normal, with changing comes
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
    <section
      className={`${ChoiceStyles.actions} ${Styles.actions}`}
      id="actions"
      aria-label={"Actions"}
    >
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.actionsInner}`}>
        <div
          className={`${ChoiceStyles.actionsContent} ${Styles.actionsContent}`}
        >
          <h2 className={`${ChoiceStyles.actionsTitle} ${Styles.actionsTitle}`}>
            What you can do now
          </h2>
        </div>
        <div className={`${ChoiceStyles.action} ${Styles.action}`}>
          <div
            className={`${ChoiceStyles.actionContent} ${Styles.actionContent}`}
          >
            <h3 className={`${ChoiceStyles.actionTitle} ${Styles.actionTitle}`}>
              The easiest thing to do is to consume less food with a high carbon
              footprint
            </h3>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              The biggest impact can be had if you{" "}
              <b>eat fewer animal products — in particular meat and dairy</b>,
              however all purchased food items have a carbon footprint.{" "}
              <b>If you’re really committed, go vegan</b>. Try to only buy items
              with <b>sustainable, or no packaging</b>, and <b>buy local</b> so
              your food isn’t travelling around the world.
            </p>
            <h4
              className={`${ChoiceStyles.actionHowTitle} ${
                Styles.actionHowTitle
              }`}
            >
              <img src={HowIcon} alt="How it helps" />
              How much would this help?
            </h4>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
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
              <h4
                className={`${ChoiceStyles.actionAsideTitle} ${
                  Styles.actionAsideTitle
                }`}
              >
                Need help changing?
              </h4>
              <ul
                className={`${ChoiceStyles.actionAsideList} ${
                  Styles.actionAsideList
                }`}
              >
                <li>
                  <OutboundLink
                    href="https://www.bbc.com/news/science-environment-46459714"
                    title="Food Carbon Footprint Calculator"
                  >
                    Calculate your food's carbon footprint →
                  </OutboundLink>
                </li>
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
            <h3 className={`${ChoiceStyles.actionTitle} ${Styles.actionTitle}`}>
              STOP wasting food. If something does go to waste make sure it’s
              recycled
            </h3>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Be more conscious when you shop and try to{" "}
              <b>only buy what you’re sure will be consumed</b>. When you have
              food or packaging that must be dumped, <b>recycle</b> it. Make
              sure you’re aware of the correct recycling procedures where you
              live. Try googling{" "}
              <OutboundLink
                href="https://www.google.com/search?ei=z2rhXKSAHpLCwQLJ_bv4Ag&q=recycling+guide&oq=recycling+guide&gs_l=psy-ab.3..0l10.1823.3741..3984...0.0..0.131.1103.13j2......0....1..gws-wiz.......0i71j0i67j0i10.pZD6cI8qvgs"
                title="Search for a recycling guide"
              >
                'recycling guide + your location'
              </OutboundLink>
              .
            </p>
            <h4
              className={`${ChoiceStyles.actionHowTitle} ${
                Styles.actionHowTitle
              }`}
            >
              <img src={HowIcon} alt="How it helps" />
              How much would this help?
            </h4>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Roughly 1/3 of food each year goes to waste. If we all became more
              efficient with our food, less would need to be produced and less
              would be left to rot - reducing greenhouse emissions.
            </p>
          </div>
        </div>
      </div>
    </section>
    <ShareSocialCta {...shareConfig} />
    <SuccessBanner />
    <ChoiceSupport />
    <section className={`${ChoiceStyles.tldr} ${Styles.tldr}`} id="tldr">
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.tldrInner}`}>
        <div className={`${ChoiceStyles.tldrImg} ${Styles.tldrImg}`} />
        <div className={`${ChoiceStyles.tldrContent} ${Styles.tldrContent}`}>
          <div
            className={`${ChoiceStyles.tldrListContainer} ${
              Styles.tldrListContainer
            }`}
          >
            <h2 className={`${ChoiceStyles.tldrTitle} ${Styles.tldrTitle}`}>
              Too long; didn't read?
            </h2>
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
                </a>{" "}
                so others make changes too
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <ChoiceGridOnChoice />
    <EarthyShare />
  </Layout>
);

export default ChangeHowYouEatPage;

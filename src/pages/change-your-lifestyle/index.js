import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import ChoiceSupport from "../../components/ChoiceSupport";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import ChoiceStyles from "../../styles/Choice.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import shareConfig from "../../configs/pages/choiceLifestyleConfig";
import ChoiceGridOnChoice from "../../components/ChoiceGrid/onChoice";
import HowIcon from "../../components/Images/Icons/HowIcon.svg";
import BannerImg from "../../components/Images/Graphics/choiceBannerLifestyle.svg";
import ShareSocialCta from "../../components/ShareSocialCta";
import EarthyShare from "../../components/EarthyShare";

const ChangeYourLifestylePage = () => (
  <Layout>
    <SEO
      title="Change your lifestyle to help prevent climate change"
      description="We rely on third parties for most aspects of our modern lifestyles. We need to make changes to become more self-sufficient and live sustainably. Learn how you can help prevent earth's climate breaking down by making simple changes."
      image="https://climatechoice.co/images/Seo/lifestyle.jpg"
      keywords={[
        `Modern lifestyle`,
        `climate change modern lifestyle`,
        `prevent climate change plastic`,
        `climate change packaging`,
        `climate change convenience`,
        `climate change food waste`,
        `prevent climate change recycle`,
        `climate change buy less`,
        `climate change consumerism`,
        `climate change single-use plastics`,
        `prevent climate breakdown reusable items`,
        `climate change independent life`,
        `climate change shopping`,
        `Change your lifestyle`,
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
            Change your lifestyle to help prevent climate breakdown
          </h1>
          <p className={`${ChoiceStyles.bannerDesc} ${Styles.bannerDesc}`}>
            We rely on third parties for most aspects of our modern lifestyles.
            We need to make changes to become more self-sufficient and live
            sustainably.
          </p>

          <div className={ChoiceStyles.bannerActions}>
            <a
              className={ChoiceStyles.bannerCtaPrimary}
              href="#actions"
              title="See how you can take action"
            >
              <button
                className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
                  ButtonStyles.btnBanner
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
      aria-label={"How to change your lifestyle"}
    >
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.howInner}`}>
        <div className={`${ChoiceStyles.howContent} ${Styles.howContent}`}>
          <h1 className={`${ChoiceStyles.howTitle} ${Styles.howTitle}`}>
            How our lifestyles contribute to climate breakdown
          </h1>
          <ol
            className={`${ChoiceStyles.choiceList} ${ChoiceStyles.howList} ${
              Styles.howList
            }`}
          >
            <li>
              Many of us buy items we don’t need. The more things you own the
              greater the size of your carbon footprint.
            </li>
            <li>
              We rely on single-use items such as bottles, bags and packaging.
              Usually they are made from plastic which can take 1,000 years to
              decompose.
            </li>
            <li>
              When we throw away items not nearly enough are recycled. That
              means many items are left to rot.
            </li>
            <li>
              Our disposable lifestyles lead to items being overproduced and
              often going to waste. Both production and waste contribute harmful
              emissions to our atmosphere.
            </li>
            <li>
              Most of us buy food rather than growing our own which fuels the
              wasteful food production industry.
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
            What stops us from changing our lifestyles?
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
                Convenience - Grabbing the nearest item without thinking about
                the consequences is often just the easiest thing to do. Carrying
                reusable items around can feel tedious. We prioritise the
                choices that require less time and effort so we don’t have to
                sacrifice aspects of our lifestyles.
              </li>
              <li>
                Availability - A lot of the time we just don’t have a choice
                available to us. When you walk into the average supermarket the
                vast majority of items are sold in unsustainable packaging.
              </li>
              <li>
                Consumerism - In our society, it has become the norm to buy more
                than you need, in fact it’s often seen as a symbol of success.
                In addition, companies use advertising to convince us we need
                their product, continuing the consumer cycle.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section
      className={`${ChoiceStyles.actions} ${Styles.actions}`}
      id="actions"
    >
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
              Buy less, recycle more
            </h2>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              <b>
                Break the consumer cycle and become comfortable with only buying
                what you need
              </b>
              . Not only will you be helping the environment, but you’ll be
              saving money. Win-win!
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              When you do shop, <b>try to only buy local and seasonal food</b>.
              For household and personal hygiene products{" "}
              <b>pick chemical-free or organic</b>.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              When it comes time to throw something away, always{" "}
              <b>make sure you’re recycling correctly</b>. Procedures differ
              from country to country but most will at least ask you to separate
              out plastics, paper items and food waste. Search online for{" "}
              <OutboundLink
                href="https://www.google.com/search?q=recycling&oq=recycling&aqs=chrome..69i57j69i65j69i61j69i59j0l2.2280j0j7&sourceid=chrome&ie=UTF-8"
                title="Search for recycling procedures"
              >
                ‘recycling + your area’
              </OutboundLink>{" "}
              to learn more about what you need to do.
            </p>
            <h3
              className={`${ChoiceStyles.actionHowTitle} ${
                Styles.actionHowTitle
              }`}
            >
              <img src={HowIcon} alt="How it helps" />
              How much would this help?
            </h3>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              If we stop buying so much, less items will be produced leader to
              reduced energy production and energy wastage. By recycling we’re
              decreasing the amount that goes to waste and ensuring less new
              materials are needed for future production.
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
                  <OutboundLink
                    href="https://makespace.com/blog/posts/minimalist-living-tips/"
                    title="Minimalism"
                  >
                    Read up on living a minimal lifestyle →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://mygreencloset.com/directory/"
                    title="Find brands with ethical/sustainable values"
                  >
                    Find brands with ethical/sustainable values →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://ethical.net/resources/"
                    title="Ethical alternatives to digital and physical stuff"
                  >
                    Ethical alternatives to digital and physical stuff →
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
            <h2 className={`${ChoiceStyles.actionTitle} ${Styles.actionTitle}`}>
              Ditch single-use plastics and replace with reusable items
            </h2>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Plastic is a major problem. First of all its production emits
              dangerous greenhouse gases into the atmosphere. When it goes to
              waste it can take up to 1,000 years to decompose - and It’s
              estimated we only recycle 20% of global plastic so a lot does.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              8 million tonnes of it ends up in our oceans each year causing
              great harm to animals. We must use less and recycle all plastic
              used to end this life threatening cycle. Here are some of the main
              choices you can make to help:
            </p>
            <p>
              <ul>
                <li>
                  <b>Don’t take plastic bags from shops</b> to carry your items
                  — bring your own
                </li>
                <li>
                  If you need to buy water <b>choose glass bottles</b> — or even
                  better carry your own reusable water bottle
                </li>
                <li>
                  Whilst shopping try to{" "}
                  <b>
                    find items with no packaging, reusable packaging or
                    recyclable packaging
                  </b>
                </li>
                <li>
                  <b>Buy second hand</b> instead of new when possible
                </li>
                <li>Buy high quality items, they will last longer</li>
              </ul>
            </p>
            <h3
              className={`${ChoiceStyles.actionHowTitle} ${
                Styles.actionHowTitle
              }`}
            >
              <img src={HowIcon} alt="How it helps" />
              How much would this help?
            </h3>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Plastic might not be the first thing people think of as a
              contributor to climate breakdown, but its existence causes many
              problems. By transitioning away from plastic we will be moving
              towards more self-sufficient lifestyles. If we all do this the
              effects will likely trickle out into other aspects of our lives,
              helping the world to become more sustainable.
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
                  <OutboundLink
                    href="https://www.onyalife.com/eco-friendly-products/"
                    title="Ethical alternatives to digital and physical stuff"
                  >
                    48 eco-friendly alternative products →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://www.businessinsider.com/household-plastic-alternatives-eco-friendly-2018-8"
                    title="25 cheap and easy replacements for plastic"
                  >
                    25 cheap and easy replacements for plastic →
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
            <h2 className={`${ChoiceStyles.actionTitle} ${Styles.actionTitle}`}>
              Live a more independent life
            </h2>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              We don’t have to rely on corporations and other third parties to
              live, this is just how our society has developed. Consider
              becoming more independent. For example{" "}
              <b>grow some of your own fruit and vegetables</b> to become less
              dependent on the food industry.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              One of the best choices you can make it to{" "}
              <Link
                title="Create your own energy supply"
                to="/choose-renewable-energy#actions"
              >
                create your own energy supply with wind or solar.
              </Link>
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
                Learn more
              </h3>
              <ul
                className={`${ChoiceStyles.actionAsideList} ${
                  Styles.actionAsideList
                }`}
              >
                <li>
                  <OutboundLink
                    href="https://www.attainable-sustainable.net/grow-your-own-food/"
                    title="Learn how to grow your own food "
                  >
                    Learn how to grow your own food →
                  </OutboundLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ShareSocialCta {...shareConfig} />

    <ChoiceSupport />
    <section
      className={`${ChoiceStyles.tldr} ${Styles.tldr}`}
      id="tldr"
      aria-label={"Too long; didn't read"}
    >
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
              The way we live today is destroying the planet. We need to change
              or it will get worse, fast. Consider changes such as:
            </p>
            <ul className={`${ChoiceStyles.tldrList} ${Styles.tldrList}`}>
              <li>Only buy items you need and always recycle what you don’t</li>
              <li>Ditch single-use plastics in favour of reusable items</li>
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

export default ChangeYourLifestylePage;

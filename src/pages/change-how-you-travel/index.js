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
import shareConfig from "../../configs/pages/choiceTravelConfig";
import ChoiceGridOnChoice from "../../components/ChoiceGrid/onChoice";
import HowIcon from "../../components/Images/Icons/HowIcon.svg";
import BannerImg from "../../components/Images/Graphics/choiceBannerTravel.svg";
import ShareSocialCta from "../../components/ShareSocialCta";

const ChangeHowYouTravelPage = () => (
  <Layout>
    <SEO
      title="Change how you travel to help prevent climate change"
      description=" 26% of harmful greenhouse-gas emissions come from the production and use of vehicles like cars, lorries and planes. Learn how you can help prevent earth's climate breaking down by making simple changes."
      image="https://climatechoice.co/images/Seo/travel.jpg"
      keywords={[
        `Travel`,
        `climate change travel`,
        `prevent climate change cars`,
        `climate change fossil fuels`,
        `climate change flying`,
        `climate change airplanes`,
        `prevent climate change flying`,
        `climate change lorries`,
        `climate change electric cars`,
        `Change how you travel`,
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
            Change how you travel to help prevent climate breakdown
          </h1>
          <p className={`${ChoiceStyles.bannerDesc} ${Styles.bannerDesc}`}>
            <b>26%</b> of the greenhouse gases emitted into our atmosphere are
            from the production and use of vehicles and airplanes.
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
    <section className={`${ChoiceStyles.how} ${Styles.how}`}>
      <a name="how" />
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.howInner}`}>
        <div className={`${ChoiceStyles.howContent} ${Styles.howContent}`}>
          <h1 className={`${ChoiceStyles.howTitle} ${Styles.howTitle}`}>
            How travel contributes to climate breakdown
          </h1>
          <ol
            className={`${ChoiceStyles.choiceList} ${ChoiceStyles.howList} ${
              Styles.howList
            }`}
          >
            <li>
              <b>
                88% of travel emissions are from vehicles like cars, lorries and
                motorbikes
              </b>
              . Their assembly process requires energy generating a carbon
              footprint (yes, electric too). However most of the damage occurs
              when a fossil fuel burning vehicle hits the road releasing tonnes
              of carbon in the process. There are over 1 billion of these
              vehicles on the road today.
            </li>
            <li>
              <b>11% comes from air travel</b>. The problems are much the same,
              planes also use fossil fuel emitting greenhouse gasses into the
              atmosphere.
            </li>
            <li>
              Fossil fuels first need to be extracted, refined and transported
              for use which means more harmful emissions.
            </li>
            <li>
              Electric cars don’t emit any carbon once on the road, however they
              do require energy which has to come from somewhere. Until we hit
              100% renewable energy electric car usage will harm the environment
              too but nowhere near as much.
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
            What stops us from changing how we travel?
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
                We don’t want to sacrifice the freedom cars and planes give us
                to get to places and live our chosen lifestyle.
              </li>
              <li>
                Using public transport can take more time and is often not as
                convenient.
              </li>
              <li>
                There is currently no real alternative to flying if you need to
                get somewhere quickly.
              </li>
              <li>
                We’re worried about the cost of buying an electric car and how
                having one will affect our lifestyle. Will I run out of battery?
                Will it take ages to charge?
              </li>
              <li>
                Businesses most often prioritise based on cost and efficiency,
                so until the cost of transporting goods and services is cheaper
                and more efficient with clean energy vehicles, they won’t be
                used.
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
              The best thing to do is get rid of your fossil fuel powered
              vehicles
            </h2>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              To have the most impact{" "}
              <b>switch to cycling, public transport and walking</b>. For those
              who must have a vehicle, it’s time to get an electric car. Review
              your choices, it’s not as expensive as you might think and there
              are cost savings to be made over the long-term — especially if you
              install solar panels at your home to generate your own energy.
              <b>
                {" "}
                Many governments have already committed to ban fossil fuel
                vehicle sales
              </b>{" "}
              in the near future and more will follow. Think of it as an
              investment.
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
              A lot! Everytime we take a carbon-emitting vehicle off the road we{" "}
              <b>
                send a message to car companies that we don’t want fossil fuel
                powered cars anymore
              </b>
              . As their demand drops, more electric cars will be bought. With
              higher demand, supply and competition will increase causing prices
              to drop. Plus we’d innovate faster on the technology — better
              range, faster charging and more charging locations.
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
                    href="https://www.bbc.com/news/science-environment-46459714"
                    title="Food Carbon Footprint Calculator"
                  >
                    Article about best electric cars near you →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink href="#" title="?">
                    Public transport guide →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink href="#" title="?">
                    Health benefits of walking/ cycling →
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
              Only fly when you absolutely must
            </h2>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Currently there is no viable alternative to air travel beyond
              trains, buses and boats. Until someone figures out how to
              decarbonise airplanes we are going to have to make some sacrifices
              to our lifestyles. Try and{" "}
              <b>
                save flying for long-haul journeys which can’t be achieved any
                other way
              </b>
              . If you need to travel a shorter distance there’s usually another
              way. Look into it, cleaner travels methods like rail can be
              cheaper, and while it may take longer, you will get to experience
              more along the way.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              When you must fly, consider{" "}
              <Link
                to="/offset-your-carbon-footprint"
                title="Pay to offset your carbon footprint"
              >
                paying a little to offset your carbon footprint
              </Link>
              . There are carbon footprint tools that will calculate the carbon
              cost of your flight and make it easy to pay.
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
              Air travel accounts for around 2% of global greenhouse gas
              emissions. There are bigger issues that need addressed, but
              remember every choice you make does have an impact.
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
              emissions enter our atmosphere because of the way we travel. To
              reduce these we must:
            </p>
            <ul className={`${ChoiceStyles.tldrList} ${Styles.tldrList}`}>
              <li>Transition to electric cars or better no cars</li>
              <li>Only fly when it’s absolutely necessary</li>
              <li>
                <Link
                  to="/offset-your-carbon-footprint"
                  title="Pay to offset your carbon footprint"
                >
                  Pay to offset your carbon footprint
                </Link>{" "}
                if you must fly
              </li>
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
  </Layout>
);

export default ChangeHowYouTravelPage;

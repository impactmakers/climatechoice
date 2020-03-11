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
import EarthyShare from "../../components/EarthyShare";
import SuccessBanner from "../../components/SuccessBanner";

const ChangeHowYouTravelPage = () => (
  <Layout>
    <SEO
      title="Change how you travel to help reduce the impacts of climate change"
      description=" 26% of harmful greenhouse gas emissions come from the production and use of vehicles like cars, lorries, and planes. Learn how you can help reduce your part of the climate break-down by making simple changes."
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
            Change how you travel to help slow the climate breakdown
          </h1>
          <p className={`${ChoiceStyles.bannerDesc} ${Styles.bannerDesc}`}>
            <b>26%</b> of the greenhouse gases emitted into our atmosphere are
            from the production and use of vehicles and airplanes.
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
    <section className={`${ChoiceStyles.how} ${Styles.how}`} id="how">
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
              <b>15% of of all global green-house gas emissions come directly from transportation</b>, for our commute to work, flying for vacation, taking 
              a train for a business meeting, etc.
            </li>
            <li>
              On top of that 15% is the assembly process, which requires energy, generating 
              huge carbon emissions for all modes of transport before they're even used! 
              When a fossil-fuel burning vehicle hits the road it releases tonnes
              of carbon in the process. There are over 1 billion of these
              vehicles on the road today.
            </li>
            <li>
              <b>2% of the worlds emissions come from air travel</b>, but only 10% of people 
              in the world fly. 2% is the same amount as processing the entire worlds sewage, 
              and 100% of the world are involved in that.
            </li>
            <li>
              Fossil fuels first need to be extracted, refined, and transported
              for use, all of which uses a lot of energy. There are leakages and spillages
              at every step of this process.
            </li>
            <li>
              Electric cars don’t emit any carbon once on the road, however they
              do require energy which has to come from somewhere. An electric car
              running on electricity generated by coal can create more CO2 than a petrol car.
            </li>
            <li>
              Contrary to popular belief, modern petrol cars produce more emissions than older
              models. The engines are becoming more efficient with new technology, but cars 
              are getting bigger and heavier, with SUV's and luxury vehicles becoming more popular, 
              even in 2020.
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
                Many people have picked the location of our homes and the jobs we work at,
                based on having access to a car, so there may not be public transport.
              </li>
              <li>
                Many people have chosen the city or country we live in based on the assumption
                we can fly home to visit family easily.
              </li>
              <li>
                Unlike train travel, flying is heavily subsidized with our tax money, so we pick 
                the cheaper mode of transportation.
              </li>
              <li>
                Electric cars seem scary due to uncertainty about finding
                compatible charging points at convenient locations.
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
              <b>switch to cycling, public transport, and walking</b>. For those
              who must have access to a car, consider sharing one with others,
              increasing the utility of each individual vehicle. If you
              absolutely must own your own an electric car is your best bet —
              though it's important to ensure your electricity supply is as close 
              to 100% renewable as possible. 
            </p>

            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Owning an electric car is not as expensive as you might think, 
              as many countries offer tax rebates, free road tax, and over the 
              long term there are savings to be made on recharging and maintenance.
              <b>
                {" "}
                Many governments have already committed to ban fossil fuel
                vehicle sales, some by 2030, others by 2050.
              </b>{" "}
              Think of this as an investment for the future, which will save you
              money over time. Even better, if you're a couple/family with two petrol
              cars, you could sell the two petrol cars, buy one electric car, one 
              electric bicycle for commuting, and still have money left over for a 
              train vacation to explore somewhere amazing closer to home.
            </p>
            <p>
              Another approach is getting vehicles converted. This reduces the 
              amount of manufacturing emissions associated with your vehicle switch.
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
              A lot! Every time we take a carbon emitting vehicle off the road
              we{" "}
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
                    href="https://electriccarbuyer.com/Compare.aspx"
                    title="Compare electric cars"
                  >
                    Compare electric cars →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://www.moneycrashers.com/living-without-car/"
                    title="Benefits of having no car"
                  >
                    The benefits of getting rid of your car →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://millionmilesecrets.com/guides/staying-green-while-traveling-how-to-reduce-your-carbon-footprint/"
                    title="Tips on staying green while travelling"
                  >
                    Tips on staying green while travelling →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://offset.earth/articles/climate-emergency/flight-free-holidays-a-practical-guide"
                    title="Flight Free Holidays - A Practical Guide"
                  >
                    Flight Free Holidays - A Practical Guide →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://protect.earth/travel"
                    title="Protect Earth - Travel Tips & Ideas"
                  >
                    Protect Earth - Travel Tips & Ideas  →
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
              Airline companies often talk about a sustainable future, but there is
              no viable technology to decarbonize flying any time in the next 20 years.
              Biofuel is often mentioned, but that requires mass deforestation to plant
              monoculture crops. The growing, processing, and transportation is still 
              horrendous. Electric planes are being used for 30 minute hops in Norway, but 
              they're a long way from replacing long haul flights.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Until someone figures out how to decarbonise airplanes we are going to 
              have to make some changes to our lifestyles. Try and{" "}
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
              . Use a tool like{" "}
              <OutboundLink href="https://air.care" title="AirCare">
                AirCare
              </OutboundLink>{" "}
              to understand the carbon cost of your flight and pay to compensate
              for it.
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
              Air travel might only account for 2% of global greenhouse gas
              emissions, but this is created by 10% of the population. <b>The 
              recommended sustainable annual footprint for a single person is 2.3
              tonnes of CO2, and flying a long-haul return trip could be 50-90% 
              of that annual budget used in one go</b>. For the small number of 
              flyers, stopping flying is the biggest impact they could have on 
              their footprint.
            </p>
          </div>
        </div>
      </div>
    </section>
    <ShareSocialCta {...shareConfig} />
    <SuccessBanner />
    <ChoiceSupport />
    <section
      className={`${ChoiceStyles.tldr} ${Styles.tldr}`}
      id="tldr"
      aria-label={"Choice of styles"}
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
              We’re killing the planet. 26% of dangerous greenhouse gas
              emissions enter our atmosphere because of the way we travel. To
              reduce these we must:
            </p>
            <ul className={`${ChoiceStyles.tldrList} ${Styles.tldrList}`}>
              <li>Transition to electric cars, or active transportation</li>
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
    <EarthyShare />
  </Layout>
);

export default ChangeHowYouTravelPage;

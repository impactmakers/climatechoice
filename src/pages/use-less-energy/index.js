import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import ChoiceSupport from "../../components/ChoiceSupport";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import ChoiceStyles from "../../styles/Choice.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import ShareSocialCta from "../../components/ShareSocialCta";
import ChoiceGridOnChoice from "../../components/ChoiceGrid/onChoice";
import HowIcon from "../../components/Images/Icons/HowIcon.svg";
import BannerImg from "../../components/Images/Graphics/choiceBannerLessEnergy.svg";
import shareConfig from "../../configs/pages/choiceLessEnergyConfig";

const UseLessEnergyPage = () => (
  <Layout>
    <SEO
      title="Use less energy to help prevent climate change"
      description="Every year the world wastes more energy than it uses. 75% of this energy comes from greenhouse gas emitting sources like coal, oil and gas. Learn how you can help prevent earth's climate breaking down by making simple changes."
      image="https://climatechoice.netlify.com/images/Seo/energy.jpg"
      keywords={[
        `Energy efficiency`,
        `climate change energy waste`,
        `prevent climate change use less energy`,
        `climate change energy wastage`,
        `climate change home insulation`,
        `climate change house insulation`,
        `prevent climate change light bulbs`,
        `climate change light bulbs`,
        `climate change desktop computer`,
        `climate change hot water`,
        `climate change taking a bath`,
        `climate change turn lights off`,
        `climate change home heating`,
        `climate change become energy efficient`,
        `climate change thermostat`,
        `Use less energy`,
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
            Use less energy to help prevent climate breakdown
          </h1>
          <p className={`${ChoiceStyles.bannerDesc} ${Styles.bannerDesc}`}>
            Every year the world wastes more energy than it uses. <b>75%</b> of
            this energy comes from greenhouse gas emitting sources like coal,
            oil and gas.
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
            How wasting energy contributes to climate breakdown
          </h1>
          <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
            Every year we waste more energy than we use. Our inefficient use of
            this energy results in the production of a greater amount than is
            necessary.
          </p>
          <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
            75% of our energy comes from greenhouse gas emitting sources.{" "}
            <b>
              By wasting so much energy we’re causing a great deal more harm to
              the environment
            </b>
            .
          </p>
        </div>
        {/* <div className={`${ChoiceStyles.howImg} ${Styles.howImg}`}>Image</div> */}
      </div>
    </section>
    <section className={`${ChoiceStyles.stops} ${Styles.stops}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.stopsInner}`}>
        <div className={`${ChoiceStyles.stopsImg} ${Styles.stopsImg}`}>
          <h1 className={`${ChoiceStyles.stopsTitle} ${Styles.stopsTitle}`}>
            What don't we stop wasting energy?
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
                Many of us aren’t aware of the effects of wasting so much
                energy.
              </li>
              <li>
                Some of the choices we could make to waste less energy require
                an upfront cost, and even though they will save us money in the
                long term, we still struggle to part with large lump sums.
              </li>
              <li>
                Alternative choices can require more time and effort. More often
                than not we aren’t willing to impact convenient aspects of our
                lifestyle for the sake of saving a little energy.
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
              Setup your home so less energy is required
            </h2>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              To start, one of the easiest things to do is{" "}
              <b>improve your insulation</b>. Doing so can reduce your energy
              needs by up to 30%! A worthy investment.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Next{" "}
              <b>
                replace older energy-zapping light bulbs with energy-saving LED
                bulbs
              </b>
              . They use 5x less energy, last 25x longer and can cost 6x less
              over 20 years.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              When you need to replace an appliance purchase an energy efficient
              alternative.{" "}
              <b>Check potential purchases for energy efficiency ratings</b> and
              consider higher quality items – they last longer. Consider getting
              rid of desktop computers, laptops are 5 times more energy
              efficient.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Lastly don’t forget to{" "}
              <Link
                to="/choose-renewable-energy#actions"
                title="Use renewable energy"
              >
                power your home with renewable energy
              </Link>
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
                Need help changing?
              </h3>
              <ul
                className={`${ChoiceStyles.actionAsideList} ${
                  Styles.actionAsideList
                }`}
              >
                <li>
                  <a href="#" title="?">
                    ??? →
                  </a>
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
              When you do use energy, choose to be more efficient to reduce
              waste
            </h2>

            <h3
              className={`${ChoiceStyles.actionPointTitle} ${
                Styles.actionPointTitle
              }`}
            >
              Use less hot water
            </h3>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Heating water uses energy. Try taking short showers instead of
              filling the bathtub. Lower your washing machine temperature. When
              your clothes are washed hang dry them instead of using a dryer.
            </p>

            <h3
              className={`${ChoiceStyles.actionPointTitle} ${
                Styles.actionPointTitle
              }`}
            >
              Turn everything off
            </h3>

            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Don’t leave your appliances on standby, switch them off. When you
              leave a room always make sure you turn any lights off too.
            </p>
            <h3
              className={`${ChoiceStyles.actionPointTitle} ${
                Styles.actionPointTitle
              }`}
            >
              Switch off your heating
            </h3>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Adjust your thermostat and radiators. Only chose to heat your home
              when absolutely necessary. Warmer clothes or a blanket can often
              do the same job.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              <a href="#" title="Energy efficiency tips">
                Read this to learn more ways to become energy efficient
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
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              75% of energy production is harmful to the environment, we could
              reduce this harm greatly by simply becoming more efficient with
              our energy usage. We’d then be able to provide almost half of our
              energy with renewable sources like solar and wind.
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
                  <a href="#" title="?">
                    Find the best light bulbs →
                  </a>
                </li>
                <li>
                  <a href="#" title="?">
                    Find energy efficient appliances near you →
                  </a>
                </li>
                <li>
                  <a href="#" title="?">
                    Learn if you can get paid for your energy →
                  </a>
                </li>
                <li>
                  <a href="#" title="?">
                    Learn how to insulate your home →
                  </a>
                </li>
                <li>
                  <a href="#" title="?">
                    Can’t help energy wastage? Consider offsetting your
                    household emittings. →
                  </a>
                </li>
              </ul>
            </div>
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
              We’re killing the planet by wasting so much of the energy we
              product. We must become more efficient with out energy usage by:
            </p>
            <ul className={`${ChoiceStyles.tldrList} ${Styles.tldrList}`}>
              <li>
                Make your home more energy efficient with better insulation and
                light bulbs
              </li>
              <li>Use less hot water and turn stuff off</li>
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

export default UseLessEnergyPage;

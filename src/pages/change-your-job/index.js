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

// Links to work with:
// https://www.pca.state.mn.us/sites/default/files/w-hhw1-14.pdf
// https://www.epa.nsw.gov.au/your-environment/recycling-and-reuse/business-government-recycling
// https://www.energy.gov.au/household-guides/work
const ChangeYourJobPage = () => (
  <Layout>
    <SEO
      title="Change your job to help prevent climate change"
      description=" The majority of all pollution produced can be traced back to some form of business operation or it's production."
      image="https://climatechoice.co/images/Seo/travel.jpg"
      keywords={[
        //UPDATE THOSE BELOW
        `Job`,
        `climate change job`,
        `prevent climate change cars`,
        `climate change fossil fuels`,
        `climate change flying`,
        `climate change airplanes`,
        `prevent climate change flying`,
        `climate change lorries`,
        `climate change electric cars`,
        `Change how you job`,
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
            Change your job and your work habits to help prevent climate
            breakdown
          </h1>
          <p className={`${ChoiceStyles.bannerDesc} ${Styles.bannerDesc}`}>
            The <b>majority</b> of all pollution produced can be traced back to
            some form of business operation or it's production.
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
      <button name="how">{null}</button>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.howInner}`}>
        <div className={`${ChoiceStyles.howContent} ${Styles.howContent}`}>
          <h1 className={`${ChoiceStyles.howTitle} ${Styles.howTitle}`}>
            How your job contributes to climate change
          </h1>
          <ol
            className={`${ChoiceStyles.choiceList} ${ChoiceStyles.howList} ${
              Styles.howList
            }`}
          >
            <li>
              <b>
                Many jobs, especially office related, use large amounts of paper
              </b>
              . According to the Minnesota Office of Environmental Assistance,
              the average office worker uses 10,000 sheets of copy paper each
              year. The U.S. EPA estimates that paper and paperboard account for
              almost 40 percent of our garbage. Here are some other statistics
              to keep in mind when looking for ways to reduce paper use and
              costs.
            </li>
            <li>
              <b>Most businesses use energy from not clean sources</b>. Energy
              usage is one of the largest contributors of pollution today. 75%
              of the methods used to produce electricity are considered to be
              harmful. Business energy consumption includes electricity for
              lighting and production as well as gas and oil for transportation.
            </li>
            <li>
              <b>Lack of recycling policies for wastage.</b>
              This applies to all business environments, from offices to
              industrial factories. The wastage might be directly related to the
              production of the business or even organic waste such as the
              employee's lunch scraps.
            </li>
          </ol>
        </div>
      </div>
    </section>
    <section className={`${ChoiceStyles.stops} ${Styles.stops}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.stopsInner}`}>
        <div className={`${ChoiceStyles.stopsImg} ${Styles.stopsImg}`}>
          <h1 className={`${ChoiceStyles.stopsTitle} ${Styles.stopsTitle}`}>
            What stops us from changing how we work?
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
                Businesses often believe that is more cost effective to keep
                their current operation practices as opposed to adopting
                environmentally friendly policies.
              </li>
              <li>
                Even in this time and age, many business processes are done
                using archaic methods such as using paper instead of electronic
                means either for convenience or lack of computer literacy.
              </li>
              <li>
                Most people underestimate how much pollution is produced as part
                of their work routine.
              </li>
              <li>
                In many countries, there is little to no governance related to
                environmental practices at work, and as a result employees
                develop bad habits that are difficult to change.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section className={`${ChoiceStyles.actions} ${Styles.actions}`}>
      <button name="actions" aria-label={"Actions"}>
        {null}
      </button>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.actionsInner}`}>
        <div
          className={`${ChoiceStyles.actionsContent} ${Styles.actionsContent}`}
        >
          <h1 className={`${ChoiceStyles.actionsTitle} ${Styles.actionsTitle}`}>
            What you can do now
          </h1>
        </div>
        <div className={`${ChoiceStyles.action} ${Styles.action}`}>
          <h2 className={`${ChoiceStyles.actionTitle} ${Styles.actionTitle}`}>
            Here is a checklist you can use to implement better work practices:
          </h2>

          <div
            className={`${ChoiceStyles.stopsListContainer} ${
              Styles.stopsListContainer
            }`}
          >
            <ol className={`${ChoiceStyles.choiceList} ${Styles.stopsList}`}>
              <li>
                Reduce waste by choosing products that have minimal packaging
                and can be used productively and then recycled. Re-use plastic
                bags and all types of containers if possible.
              </li>
              <li>
                Buy quality goods that will last. Buy recycled goods which have
                already saved resources and raw materials, and help reduce the
                overall quantity of waste.
              </li>
              <li>
                For paper specifically: Make double-sided copies when printing
                and photocopying, wherever possible. Use the blank side of used
                paper for notepaper before recycling.Re-use envelopes for
                internal mail.Try to integrate electronic procedures to reduce
                paper work.
              </li>
              <li>
                Recycle waste material into useable products, wherever possible.
                Re-use containers, packaging or waste products, wherever
                possible.
              </li>
              <li>
                For waste that can't be avoided, reused or recycled: treat the
                waste to make it less harmful or reduce the volume of the
                harmful component. Dispose of the waste safely.
              </li>
              <li>
                Some strategies which can be implemented by the Manager and
                Supervisors: Consider sustainability issues when making planning
                and managing decisions. Promote and encourage environmental
                awareness to ensure employees are aware of their environmental
                responsibilities.
              </li>
              <li>
                Use public transportation whenever possible, and research better
                energy sources for your workplace to help with carbon emissions.
              </li>
            </ol>
          </div>
          <div
            className={`${ChoiceStyles.actionContent} ${Styles.actionContent}`}
          >
            <h3
              className={`${ChoiceStyles.actionHowTitle} ${
                Styles.actionHowTitle
              }`}
            >
              <img src={HowIcon} alt="How it helps" />
              How much would this help?
            </h3>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Quite significantly, since businesses are the biggest contributors
              to climate change.{" "}
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ShareSocialCta {...shareConfig} />
    <SuccessBanner />
    <ChoiceSupport />
    <section className={`${ChoiceStyles.tldr} ${Styles.tldr}`}>
      <button name="tldr" aria-label={"Choice of styles"}>
        {null}
      </button>
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
              The majority of all pollution produced can be traced back to some
              form of business operation or it's production. To help with this
              we must:
            </p>
            <ul className={`${ChoiceStyles.tldrList} ${Styles.tldrList}`}>
              <li>Reduce waste and recycle when at work</li>
              <li>Buy and use recycled good whenever possible</li>
              <li>Inform all employees </li>
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

export default ChangeYourJobPage;

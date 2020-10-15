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
import shareConfig from "../../configs/pages/pressureThoseInPower";
import ChoiceGridOnChoice from "../../components/ChoiceGrid/onChoice";
import BannerImg from "../../components/Images/Graphics/pressureThoseInPowerBanner.svg";
import HowIcon from "../../components/Images/Icons/HowIcon.svg";
import EarthyShare from "../../components/EarthyShare";
import SuccessBanner from "../../components/SuccessBanner";

const PressureThoseInPower = () => (
  <Layout>
    <SEO
      title="Pressure those in power to help prevent climate change"
      description="Climate change is an urgent crisis that cannot be held separate from politics for real change to occur"
      image="https://climatechoice.co/images/Seo/power.jpg"
      keywords={[
        `politics`,
        `policies`,
        `climate change policy`,
        `green energy`,
        `prevent climate change policy`,
        `climate change`,
        `sustainability`,
        `climate change laws`,
        `pressure those in power`,
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
            Pressure those in power to help prevent climate breakdown
          </h1>
          <p className={`${ChoiceStyles.bannerDesc} ${Styles.bannerDesc}`}>
            Climate change is an urgent crisis that cannot be held separate from
            politics for real change to occur
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
      aria-label={"How"}
    >
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.howInner}`}>
        <div className={`${ChoiceStyles.howContent} ${Styles.howContent}`}>
          <h1 className={`${ChoiceStyles.howTitle} ${Styles.howTitle}`}>
            How politics, policy and those in power contributes to climate
            breakdown
          </h1>
          <ol
            className={`${ChoiceStyles.choiceList} ${ChoiceStyles.howList} ${
              Styles.howList
            }`}
          >
            <li>
              Those with political power make decisions for the world that
              affect emissions and the state of our planet.
            </li>
            <li>
              Lobbyists for big oil and other large energy companies use their
              immense budget to influence politicians, causing politicians who
              do take climate change seriously and seek a solution severely
              underfunded comparatively.
            </li>
            <li>
              People in power use convincing rhetoric to mold the opinions of
              their peers and viewers.
            </li>
            <li>
              Biased news outlets project the policies that benefit their
              platform and skew or omit data to reflect the belief they are
              attempting to persude.
            </li>
            <li>
              News outlets have the greatest ability to affect public opinion
              and influence belief systems.
            </li>
          </ol>
        </div>
        {/* <div className={`${ChoiceStyles.howImg} ${Styles.howImg}`}>Image</div> */}
      </div>
    </section>
    <section className={`${ChoiceStyles.stops} ${Styles.stops}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.stopsInner}`}>
        <div className={`${ChoiceStyles.powerImg} ${Styles.stopsImg}`}>
          <h1 className={`${ChoiceStyles.stopsTitle} ${Styles.stopsTitle}`}>
            What stops us from pressuring those in power?
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
                The task of changing policy can appear daunting and
                intimidating.
              </li>
              <li>
                Many people do not know how to influence policy or reach out to
                elected officials.
              </li>
              <li>
                Many people vote based on political affiliation regardless of
                policies the politician holds.
              </li>
              <li>
                Often people do not know where to start or believe that they
                cannot make a difference anyway.
              </li>
              <li>
                Politicians use scare tactics to instill the beliefs, i.e. the
                economic cost of green policies and combating climate change is
                too great.
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
              The most important thing to do is becoming more informed!
            </h2>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              The biggest impact can be had if you{" "}
              <b>investigate the policies of those up for election</b>, then
              vote for who's views best align with your own.{" "}
              <b>Reach out to public officials!</b> All congressmen and
              congresswomen have public contacts. <b>Start local!</b> Before you
              try and fix a nation, fix your own backyard. Local officials are
              the politicans who's policies most directly affect your day to day
              life. This also lays the groundwork for changing the planet from
              the bottom-up.
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
              If we are able to elect officials who value our planet and hope to
              minimize or eliminate the effects humans have on the climate, then
              their policies would be reflective of that. This would incentivize
              the industry to change with their ways or get left behind. No true
              change can come until the political conversation changes as well.
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
                Need help pressuring for change?
              </h3>
              <ul
                className={`${ChoiceStyles.actionAsideList} ${
                  Styles.actionAsideList
                }`}
              >
                <li>
                  <h3>
                    {" "}
                    <u>United States </u>
                  </h3>

                  <OutboundLink
                    href="https://www.whitehouse.gov/contact/"
                    title="Contact a public official"
                  >
                    Contact the President of the United States →
                  </OutboundLink>
                  <li>
                    <OutboundLink
                      href="https://www.govtrack.us/"
                      title="Contact a public official"
                    >
                      Find and contact your congressmen and congresswomen →
                    </OutboundLink>
                  </li>
                  <li>
                    <OutboundLink
                      href="https://www.usa.gov/elected-officials"
                      title="Contact a public official"
                    >
                      Find and contact any elected official →
                    </OutboundLink>
                    <h3>
                      {" "}
                      <u> United Kingdom </u>
                    </h3>
                    <OutboundLink
                      href="https://members.parliament.uk/members/Lords"
                      title="Contact a public official"
                    >
                      Find and contact your members of the House of Lords→
                    </OutboundLink>
                    <li>
                      <OutboundLink
                        href="https://members.parliament.uk/members/Commons"
                        title="Contact a public official"
                      >
                        Find and contact your members of the House of Commons →
                      </OutboundLink>
                    </li>
                    <h3>
                      {" "}
                      <u> France </u>
                    </h3>
                    <OutboundLink
                      href="https://www.senat.fr/elus.html"
                      title="Contact a public official"
                    >
                      Find and contact your Senators→
                    </OutboundLink>
                    <li>
                      <OutboundLink
                        href="http://www.assemblee-nationale.fr/dyn/vos-deputes"
                        title="Contact a public official"
                      >
                        Find and contact your Deputies of the National Assembly
                        →
                      </OutboundLink>
                    </li>
                    <h3>
                      {" "}
                      <u> Spain </u>
                    </h3>
                    <OutboundLink
                      href="http://www.senado.es/web/relacionesciudadanos/atencionciudadano/contactar/index.html"
                      title="Contact a public official"
                    >
                      Find and contact your President, Senators and
                      Parliamentary groups/administration →
                    </OutboundLink>

                    <h3>
                      {" "}
                      <u> Germany </u>
                    </h3>
                    <OutboundLink
                      href="https://www.bundestag.de/en/members#"
                      title="Contact a public official"
                    >
                      Find and contact your members of the Bundestag →
                    </OutboundLink>
                    <li>
                      <OutboundLink
                        href="https://www.bundesrat.de/DE/bundesrat/mitglieder/mitglieder-node.html"
                        title="Contact a public official"
                      >
                        Find and contact your members of the Bundesrat →
                      </OutboundLink>
                    </li>
                    <h3>
                      {" "}
                      <u> Italy </u>
                    </h3>
                    <OutboundLink
                      href="http://www.senato.it/leg/18/BGT/Schede/Attsen/Sena.html"
                      title="Contact a public official"
                    >
                      Find and contact your Senators →
                    </OutboundLink>
                    <li>
                      <OutboundLink
                        href="https://www.camera.it/leg18/28"
                        title="Contact a public official"
                      >
                        Find and contact your members of the Chamber of Deputies
                        →
                      </OutboundLink>
                    </li>
                    <h3>
                      {" "}
                      <u> Canada </u>
                    </h3>
                    <OutboundLink
                      href="https://www.ourcommons.ca/Members/en/search"
                      title="Contact a public official"
                    >
                      Find and contact your members of Parliament →
                    </OutboundLink>
                    <li>
                      <OutboundLink
                        href="https://sencanada.ca/en/senators-list/"
                        title="Contact a public official"
                      >
                        Find and contact your Senators →
                      </OutboundLink>
                    </li>
                    <h3>
                      {" "}
                      <u> India </u>
                    </h3>
                    <OutboundLink
                      href="http://loksabhaph.nic.in/Members/AlphabeticalList.aspx"
                      title="Contact a public official"
                    >
                      Find and contact your members of the House of the People →
                    </OutboundLink>
                    <li>
                      <OutboundLink
                        href="https://rajyasabha.nic.in/rsnew/member_site/memberlist.aspx"
                        title="Contact a public official"
                      >
                        Find and contact your members of the Council of States →
                      </OutboundLink>
                    </li>
                    <h3>
                      {" "}
                      <u> Australia </u>
                    </h3>
                    <OutboundLink
                      href="https://www.aph.gov.au/Senators_and_Members/Parliamentarian_Search_Results?q=&mem=1&par=-1&gen=0&ps=0"
                      title="Contact a public official"
                    >
                      Find and contact your members of Parliament →
                    </OutboundLink>
                    <li>
                      <OutboundLink
                        href="https://www.aph.gov.au/Senators_and_Members/Parliamentarian_Search_Results?q=&sen=1&par=-1&gen=0&ps=0"
                        title="Contact a public official"
                      >
                        Find and contact your Senators →
                      </OutboundLink>
                    </li>
                  </li>
                </li>
              </ul>
            </div>
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
                Want to read more or find additional ways to help?
              </h3>
              <ul
                className={`${ChoiceStyles.actionAsideList} ${
                  Styles.actionAsideList
                }`}
              >
                <li>
                  <OutboundLink
                    href="https://protect.earth/politics/"
                    title="Visit Protect.Earth"
                  >
                    Find protests, petitions and important votes near you! →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://climate.nasa.gov/"
                    title="Visit NASA"
                  >
                    Learn more from the experts at NASA →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://www.opsociety.org/"
                    title="Visit the Oceanic Preservation Society"
                  >
                    Learn more and protect our oceans with the Oceanic
                    Preservation Society →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://standfortrees.org/en/climate-change"
                    title="Visit Stand For Trees"
                  >
                    Learn more and protect our forests with Stand For Trees →
                  </OutboundLink>
                </li>
                <h3
                  className={`${ChoiceStyles.actionAsideTitle} ${
                    Styles.actionAsideTitle
                  }`}
                >
                  Want to really dig deep?
                </h3>
                <li>
                  <OutboundLink
                    href="https://www.environmentalsciencedegree.com/climate-change/"
                    title="101 Top web resources"
                  >
                    Browse the top 101 web resources on climate change from
                    enivronmental science degree →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="http://www.world.org/weo/climate"
                    title="100 Top climate change sites"
                  >
                    Browse the top 100 climate change sites via World.org →
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
    <section className={`${ChoiceStyles.tldr} ${Styles.tldr}`} id="tldr">
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
              Pressure those in power help prevent climate breakdown
            </p>
            <ul className={`${ChoiceStyles.tldrList} ${Styles.tldrList}`}>
              <li>Contact elected officials</li>
              <li>Become more informed on policies</li>
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

export default PressureThoseInPower;

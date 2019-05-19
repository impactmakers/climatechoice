import React from 'react';
import Layout from '../../components/layout';
import ChoiceSupport from '../../components/ChoiceSupport';
import SEO from '../../components/seo';
import GlobalStyles from '../../styles/Global.module.scss';
import ChoiceStyles from '../../styles/Choice.module.scss';
import ButtonStyles from '../../styles/Buttons.module.scss';
import Styles from './Styles.module.scss';
import ShareSocialCta from '../../components/ShareSocialCta';
import ChoiceGridOnChoice from '../../components/ChoiceGrid/onChoice';
import HowIcon from '../../components/Images/Icons/HowIcon.svg';
import BannerImg from '../../components/Images/Graphics/choiceBannerRenewable.svg';
import shareConfig from '../../configs/pages/choiceRenewableConfig';

const ChooseRenewablePage = () => (
  <Layout>
    <SEO
      title="Choose renewable energy to help prevent climate change"
      description="75% of the energy used globally comes from coal, gas, oil and nuclear — non-renewable sources that produce greenhouse gas emissions. Learn how you can help prevent earth's climate breaking down by making simple changes."
      image="https://climatechoice.netlify.com/images/Seo/travel.jpg"
      keywords={[
        `Renewable energy`,
        `climate change renewable energy`,
        `prevent climate renewable energy`,
        `climate change fossil fuels`,
        `climate change green energy`,
        `climate change clean energy`,
        `prevent climate change non-renewable energy`,
        `climate change coal`,
        `climate change natural gas`,
        `climate change nuclear`,
        `climate change oil`,
        `climate change solar`,
        `climate change wind`,  
        `Choose renewable energy`,
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
            Choose renewable energy to help prevent climate breakdown
          </h1>
          <p className={`${ChoiceStyles.bannerDesc} ${Styles.bannerDesc}`}>
            <b>75%</b> of the energy used globally comes from coal, gas, oil and
            nuclear — non-renewable sources that produce greenhouse-gas
            emissions.
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
        Short on time?{' '}
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
            How energy usage contributes to climate breakdown
          </h1>
          <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
            In the modern world we have become dependent on electrical energy to
            power our lives. Unfortunately{' '}
            <b>
              75% of our energy is provided by polluting non-renewable sources
            </b>
            .
          </p>
          <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
            Coal is the most widely used energy source. It also emits more
            carbon than any other fossil fuel. Next up is natural gas. It might
            sound ‘green’ but much like coal it produces carbon when burned.
            Then there’s oil, it’s only a small part of our total energy
            consumption, but it’s the second biggest emitter behind coal.
            Finally, nuclear which is the cleanest of the non-renewables, but
            it’s still responsible for emissions.
          </p>
          <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
            It’s worth noting renewable sources such as wind, solar and hydro
            electricity also have a carbon footprint from their production, but
            all have a lower environmental impact and won’t run out.
          </p>
        </div>
        {/* <div className={`${ChoiceStyles.howImg} ${Styles.howImg}`}>Image</div> */}
      </div>
    </section>
    <section className={`${ChoiceStyles.stops} ${Styles.stops}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.stopsInner}`}>
        <div className={`${ChoiceStyles.stopsImg} ${Styles.stopsImg}`}>
          <h1 className={`${ChoiceStyles.stopsTitle} ${Styles.stopsTitle}`}>
            What stops us from choosing renewable energy?
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
                Cost - Buying renewable energy can be more expensive than non-renewable sources (though this is changing fast). Creating your own solar or wind energy also has an upfront construction cost.
              </li>
              <li>
              Availability - There isn’t enough renewable energy being produced (yet) to cover our daily usage. Some of our homes may also be in areas where no renewable energy supplier is available.
              </li>
              <li>
                Awareness - A lot of people don’t think much about their energy provider, nor have they looked to see if there is a renewable alternative.
              </li>
              <li>
                Effort - Changing your energy supplier might create hassle for you in order to make the switch - so you don’t.
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
              The easiest thing to do is find a local renewable energy supplier and make the switch.
            </h2>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              <b>Start by checking with your existing energy supplier</b>, many already give you the option to choose a green energy source over non-renewables. It may cost you a bit more, but it’s the easiest way to change. It’s also worthwhile researching other suppliers near you. You might find a bretter price.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              If you don’t have a renewable option with your existing supplier it’s time to shop around. A quick search online for <a href="https://www.google.com/search?ei=xajfXIqsIcuWkwXZ4puYAw&q=renewable+energy+supplier&oq=renewable+energy+supplier&gs_l=psy-ab.3..0l8.10087.10595..10882...0.0..0.82.200.3......0....1..gws-wiz.......0i71j33i22i29i30j0i22i30.742iU1EWxJs" title="Search for a renewable energy supplier">
              ‘Renewable energy supplier + your location’</a> should point you in the right direction.
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
              100% renewable energy is likely inevitable. But <b>to prevent climate breakdown we must achieve 100% renewable energy as quickly as possible</b>. By choosing a renewable provider today you are voting for your preference, and the more votes each provider gets the more likely they are to speed up the development of their renewable sources. With more demand supply and competition will increase, driving costs down for all of us.
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
                    href="#"
                    title="?"
                  >
                    Find a renewable energy supplier near you →
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
              Create your own energy supply by installing solar panels or wind turbines
            </h2>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              While creating your own renewable energy source has an upfront cost, <b>it will likely benefit you financially over the long term</b>. 
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              With solar how much you can save depends on factors such as direct hours of daily sunlight and your local electricity rate. In some places you can even get paid for any excess power you can provide to the electricity grid. That’s right — get paid for your energy! 
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Wind is another option. It can generate you energy 24 hours a day but there are some downsides. Wind requires more specialised maintenance, it can be noisy, unsightly and dangerous to birds.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              <b>Most people choose solar</b> as it’s easier to install, less maintenance and doesn’t get in peoples way. Consider which option best suits your location.
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
              Having your own supply means other people can use the currently limited renewable sources from existing energy suppliers. If everyone has renewable energy available to them we’d be a lot closer to eliminating our dependency on coal, gas, oil and nuclear energy. 
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
                  <a
                    href="#"
                    title="?"
                  >
                    Learn how to install your own solar panels →
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="?"
                  >
                    Find out how much solar can save you →
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="?"
                  >
                    Learn if you can get paid for your energy →
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="?"
                  >
                    Learn how to install your own wind turbines →
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
              We’re killing the planet. 75% of our energy is supplied from the greenhouse gas emitting sources coal, gas, oil and nuclear. To reduce these we must:

            </p>
            <ul className={`${ChoiceStyles.tldrList} ${Styles.tldrList}`}>
              <li>Transition to renewable energy providers</li>
              <li>Consider generating your own energy with solar or wind</li>
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

export default ChooseRenewablePage;

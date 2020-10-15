import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import FormStyles from "./Form.module.scss";
import addToMailchimp from "gatsby-plugin-mailchimp";
import Tick from "./TickGreenIcon.svg";
import EatIcon from "../Images/Icons/ChoiceEatIcon.svg";
import PowerIcon from "../Images/Icons/PowerIcon.svg";
import TravelIcon from "../Images/Icons/ChoiceTravelIcon.svg";
import LifestyleIcon from "../Images/Icons/ChoiceLifestyleIcon.svg";
import EnergyIcon from "../Images/Icons/ChoiceEnergyIcon.svg";
import RenewableIcon from "../Images/Icons/ChoiceRenewableIcon.svg";
import SoonIcon from "../Images/Icons/ChoiceSoonIcon.svg";
import Chevron from "../Images/Icons/ChevronGrayRightIcon.svg";
import JobIcon from "../Images/Icons/ChoiceJob.svg";

const ChoiceGridItems = () => {
  const [email, setEmail] = useState("");
  const [visited, setVisited] = useState({});
  const [message, setMessage] = useState();
  const [_, setResult] = useState();

  useEffect(function checkVisitedPages() {
    const visited = {
      "change-how-you-eat":
        localStorage.getItem("/change-how-you-eat") === "visited",
      "change-how-you-travel":
        localStorage.getItem("/change-how-you-travel") === "visited",
      "choose-renewable-energy":
        localStorage.getItem("/choose-renewable-energy") === "visited",
      "use-less-energy": localStorage.getItem("/use-less-energy") === "visited",
      "change-your-lifestyle":
        localStorage.getItem("/change-your-lifestyle") === "visited",
      "change-your-job": localStorage.getItem("/change-your-job") === "visited",
      "pressure-those-in-power":
        localStorage.getItem("/pressure-those-in-power") === "visited"
    };

    setVisited(visited);
  }, []);

  function renderReadStatus(slug) {
    if (visited[slug]) {
      return (
        <span
          className={`${Styles.choiceReadStatus} ${
            Styles.choiceReadStatusRead
          }`}
        >
          <img src={Tick} alt="Read it" />
          You've read this
        </span>
      );
    }

    return <span className={Styles.choiceReadStatus}>Not read yet</span>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { result, msg } = await addToMailchimp(email);
    setResult(result);
    setMessage(msg);
  }

  return (
    <div className={Styles.choiceGridWrapper}>
      <ul className={Styles.choiceGrid}>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceEat}`}>
          <Link className={Styles.choiceContainer} to="/change-how-you-eat">
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img src={EatIcon} alt="Cow" />
              </div>

              <img
                className={Styles.choiceChevron}
                src={Chevron}
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Change how <br />
              you eat
            </h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus("change-how-you-eat")}
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceEat}`}>
          <Link className={Styles.choiceContainer} to="/change-how-you-travel">
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img src={TravelIcon} alt="Car" />
              </div>

              <img
                className={Styles.choiceChevron}
                src={Chevron}
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Change how <br />
              you travel
            </h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus("change-how-you-travel")}
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceRenewable}`}>
          <Link
            className={Styles.choiceContainer}
            to="/choose-renewable-energy"
          >
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img src={RenewableIcon} alt="Sun" />
              </div>

              <img
                className={Styles.choiceChevron}
                src={Chevron}
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>Choose renewable energy</h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus("choose-renewable-energy")}
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceEat}`}>
          <Link className={Styles.choiceContainer} to="/use-less-energy">
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img src={EnergyIcon} alt="Light bulb" />
              </div>

              <img
                className={Styles.choiceChevron}
                src={Chevron}
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Use less <br />
              energy
            </h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus("use-less-energy")}
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceRenewable}`}>
          <Link className={Styles.choiceContainer} to="/change-your-lifestyle">
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img src={LifestyleIcon} alt="Recycle" />
              </div>

              <img
                className={Styles.choiceChevron}
                src={Chevron}
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Change your <br />
              lifestyle
            </h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus("change-your-lifestyle")}
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceJob}`}>
          <Link className={Styles.choiceContainer} to="/change-your-job">
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img src={JobIcon} alt="Change your job" />
              </div>

              <img
                className={Styles.choiceChevron}
                src={Chevron}
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Change your <br />
              job
            </h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus("change-your-job")}
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choicePower}`}>
          <Link
            className={Styles.choiceContainer}
            to="/pressure-those-in-power"
          >
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img src={PowerIcon} alt="Gavel" />
              </div>

              <img
                className={Styles.choiceChevron}
                src={Chevron}
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Pressure those <br />
              in power
            </h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus("pressure-those-in-power")}
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceGridSoon}`}>
          <div className={Styles.choiceContainer}>
            <div className={Styles.choiceHeader}>
              <div className={`${Styles.choiceIcon} ${Styles.choiceSoonIcon}`}>
                <img src={SoonIcon} alt="More guides coming soon" />
              </div>
            </div>
            <h2 className={`${Styles.choiceTitle} ${Styles.choiceSoonTitle}`}>
              Watch this <br />
              space...
            </h2>
            <div className={Styles.choiceMeta}>
              <span className={Styles.choiceReadStatus}>
                More guides coming soon
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div className={Styles.subscribe}>
        <div className={Styles.subscribeForm}>
          <h3 className={Styles.subscribeTitle}>
            Get notified when we add more choice guides
          </h3>
          <form className={FormStyles.fieldContainer} onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="Enter your email address..."
              aria-label="Enter your email address..."
              className={FormStyles.field}
            />
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
              className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnSm} ${
                ButtonStyles.btnPrimary
              } ${ButtonStyles.btnMobile}`}
            />
          </form>
        </div>
        {message && (
          <div className={FormStyles.status}>
            <p className={FormStyles.statusMsg}>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChoiceGridItems;

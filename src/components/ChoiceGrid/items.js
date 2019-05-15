import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import ButtonStyles from '../../styles/Buttons.module.scss';
import Styles from './Styles.module.scss';
import FormStyles from './Form.module.scss';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Tick from './TickGreenIcon.svg';

const ChoiceGridItems = () => {
  const [email, setEmail] = useState('');
  const [visited, setVisited] = useState({});
  const [message, setMessage] = useState();
  const [result, setResult] = useState();

  useEffect(function checkVisitedPages() {
    const visited = {
      'change-how-you-eat':
        localStorage.getItem('/change-how-you-eat') === 'visited',
      'change-how-you-travel':
        localStorage.getItem('/change-how-you-travel') === 'visited',
      'choose-renewable-energy':
        localStorage.getItem('/choose-renewable-energy') === 'visited',
      'use-less-energy': localStorage.getItem('/use-less-energy') === 'visited',
      'change-your-lifestyle':
        localStorage.getItem('/change-your-lifestyle') === 'visited'
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
          <img src={Tick} alt="Read" />
          Read
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
                <img
                  src="../../../../images/Icons/ChoiceEatIcon.svg"
                  alt="Change how you eat"
                />
              </div>

              <img
                className={Styles.choiceChevron}
                src="../../../../images/Icons/ChevronGrayRightIcon.svg"
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Change how <br />
              you eat
            </h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus('change-how-you-eat')}
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceEat}`}>
          <Link className={Styles.choiceContainer} to="/change-how-you-travel">
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img
                  src="../../../../images/Icons/ChoiceTravelIcon.svg"
                  alt="Change how you travel"
                />
              </div>

              <img
                className={Styles.choiceChevron}
                src="../../../../images/Icons/ChevronGrayRightIcon.svg"
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Change how <br />
              you travel
            </h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus('change-how-you-travel')}
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
                <img
                  src="../../../../images/Icons/ChoiceRenewableIcon.svg"
                  alt="Choose renewable energy"
                />
              </div>

              <img
                className={Styles.choiceChevron}
                src="../../../../images/Icons/ChevronGrayRightIcon.svg"
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>Choose renewable energy</h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus('choose-renewable-energy')}
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceEat}`}>
          <Link className={Styles.choiceContainer} to="/use-less-energy">
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img
                  src="../../../../images/Icons/ChoiceEnergyIcon.svg"
                  alt="Use less energy"
                />
              </div>

              <img
                className={Styles.choiceChevron}
                src="../../../../images/Icons/ChevronGrayRightIcon.svg"
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Use less <br />
              energy
            </h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus('use-less-energy')}
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceRenewable}`}>
          <Link className={Styles.choiceContainer} to="/change-your-lifestyle">
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img
                  src="../../../../images/Icons/ChoiceLifestyleIcon.svg"
                  alt="Change your lifestyle"
                />
              </div>

              <img
                className={Styles.choiceChevron}
                src="../../../../images/Icons/ChevronGrayRightIcon.svg"
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Change your <br />
              lifestyle
            </h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus('change-your-lifestyle')}
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceGridSoon}`}>
          <div className={Styles.choiceContainer}>
            <div className={Styles.choiceHeader}>
              <div className={`${Styles.choiceIcon} ${Styles.choiceSoonIcon}`}>
                <img
                  src="../../../../images/Icons/ChoiceSoonIcon.svg"
                  alt="More guides coming soon"
                />
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
              class="required email"
              id="mce-EMAIL"
              placeholder="Enter your email address..."
              className={FormStyles.field}
            />
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
              className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnSm} ${
                ButtonStyles.btnGreen
              } ${ButtonStyles.btnMobile}`}
            />
          </form>
        </div>
        {message && (
          <div className={FormStyles.status}>
            <h4 className={FormStyles.statusResult}>{result}</h4>
            <p className={FormStyles.statusMsg}>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChoiceGridItems;

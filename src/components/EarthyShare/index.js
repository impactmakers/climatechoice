import React, { useEffect, useState } from "react";
import GlobalStyles from "../../styles/Global.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import EarthIcon from "../Images/Icons/EarthIcon.svg";
import Tick from "./BubbleTick.svg";

const EarthyShare = () => {
  const [show, setShow] = useState(false);

  let handleScroll = () => {
    if (window.scrollY > 0) {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`${Styles.container} ${
        show ? Styles.containerShown : Styles.containerHidden
      }`}
    >
      <div className={Styles.bubble}>
        <span className={Styles.bubbleText}>
          <span role="img" aria-label="wave">
            👋
          </span>{" "}
          Share this page
        </span>
        <a
          className={Styles.bubbleLink}
          href="#share"
          title="See how you can take action"
        >
          <button
            className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnXs} ${
              ButtonStyles.btnPrimary
            } ${ButtonStyles.btnEarthyShare} `}
          >
            Share
          </button>
        </a>
        <img src={Tick} alt="Bubble" className={Styles.bubbleTick} />
      </div>
      <div className={Styles.icon}>
        <img src={EarthIcon} alt="Earthy" className={Styles.earthIcon} />
      </div>
    </div>
  );
};

export default EarthyShare;

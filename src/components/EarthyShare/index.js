import React, { useEffect, useState } from "react";
import { Link, Events } from "react-scroll";
import GlobalStyles from "../../styles/Global.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import EarthIcon from "../Images/Icons/EarthIcon.svg";
import Tick from "./BubbleTick.svg";

const EarthyShare = () => {
  const [show, setShow] = useState(false);
  const [wasShown, setWasShown] = useState(false);

  let handleWindowScroll = () => {
    if (!wasShown && window.scrollY > 0) {
      setShow(true);
      setWasShown(true);
    }
  };

  let handleSmoothScrollEnd = () => setShow(false);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  });

  useEffect(() => {
    Events.scrollEvent.register("end", handleSmoothScrollEnd);
    return () => Events.scrollEvent.remove("end");
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

        <Link
          to="share"
          smooth={"easeInOutQuad"}
          duration={500}
          title="See how you can take action"
          href="#share"
          className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnXs} ${
            ButtonStyles.btnPrimary
          } ${ButtonStyles.btnEarthyShare} `}
        >
          Share
        </Link>
        <img src={Tick} alt="Bubble" className={Styles.bubbleTick} />
      </div>
      <div className={Styles.icon}>
        <img src={EarthIcon} alt="Earthy" className={Styles.earthIcon} />
      </div>
    </div>
  );
};

export default EarthyShare;

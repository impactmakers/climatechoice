import React, { useState, useEffect } from "react";
import GlobalStyles from "../../styles/Global.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import HomeBanner from "./homeBanner.svg";

import ConvincedButton from "./ConvincedButton";

const HomeIntro = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 2000);
  }, []);

  return (
    <section className={Styles.container}>
      <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
        <div className={Styles.content}>
          <h1 className={Styles.title}>
            We must cut global emissions in half by 2030 or face{" "}
            {!mounted ? (
              <span className={Styles.titleEmphasis}>mass extinctions</span>
            ) : (
              <TypistLoop interval={0}>
                {[
                  "extreme weather",
                  "water shortages",
                  "crop failures",
                  "wildfires",
                  "mass migrations",
                  "sea level rises",
                  "mass extinctions"
                ].map(text => (
                  <Typist
                    className={Styles.typist}
                    key={text}
                    cursor={{ show: false }}
                    avgTypingDelay={45}
                  >
                    <span className={Styles.titleEmphasis}>{text}</span>
                    <Typist.Backspace count={text.length} delay={3000} />
                  </Typist>
                ))}
              </TypistLoop>
            )}
          </h1>
          <div className={Styles.ctas}>
            <a
              className={Styles.ctaPrimary}
              href="#your-choices"
              title="How you can help prevent climate breakdown"
            >
              <button
                className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
                  ButtonStyles.btnGreen
                } ${ButtonStyles.btnMobile}`}
              >
                Learn how you can help
              </button>
            </a>
            <ConvincedButton />
          </div>
        </div>
        <div className={Styles.img}>
          <img
            src={HomeBanner}
            alt="CO2 Emissions Target"
            className={Styles.bannerImg}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;

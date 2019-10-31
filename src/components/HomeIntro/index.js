import React, { useState, useEffect } from "react";
import GlobalStyles from "../../styles/Global.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import HomeBanner from "./homeBanner.svg";
import { formatMessage } from "gatsby-plugin-intl";
import { injectIntl } from "react-intl";

import ConvincedButton from "../ConvincedButton";

const HomeIntro = ({ intl }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 4000);
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
              <TypistLoop interval={3000}>
                {[
                  "extreme_weather",
                  "water_shortages",
                  "crop_failures",
                  "wildfires",
                  "mass_migrations",
                  "sea_level rises",
                  "mass_extinctions"
                ].map(text => (
                  <Typist
                    className={Styles.typist}
                    key={{ text }}
                    cursor={{ show: false }}
                    interval={1000}
                  >
                    <span className={Styles.titleEmphasis}>
                      {intl.formatMessage({ id: { text }.text })}
                    </span>
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
                  ButtonStyles.btnBanner
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

export default injectIntl(HomeIntro);

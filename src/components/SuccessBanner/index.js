import React from "react";
import GlobalStyles from "../../styles/Global.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Styles from "./Styles.module.scss";

const SuccessBanner = () => (
  <section className={Styles.container}>
    <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
      <h2 className={Styles.title}>
        Has ClimateChoice helped you make changes?
      </h2>
      <p className={Styles.text}>
        Then tweet your success story{" "}
        <OutboundLink
          href="https://twitter.com/climatechoice"
          title="Tweet @climatechoice"
        >
          @climatechoice
        </OutboundLink>{" "}
        and we'll add it here!
      </p>
    </div>
  </section>
);

export default SuccessBanner;

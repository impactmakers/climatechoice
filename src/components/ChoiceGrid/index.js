import React from "react";
import GlobalStyles from "../../styles/Global.module.scss";
import Styles from "./Styles.module.scss";
import ChoiceGridItems from "./items";

const ChoiceGrid = () => (
  <section
    id="your-choices"
    className={`${GlobalStyles.container} ${Styles.choiceGridContainer} ${
      Styles.choiceGridContainerOnHome
    }`}
  >
    <div
      className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner} ${
        Styles.choiceGridInner
      }`}
    >
      <div className={GlobalStyles.subpageContent}>
        <h1 className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}>
          Your choices today can help prevent climate breakdown
        </h1>
        <p>
          It’s not too late to curb the effects of global warming before they
          spiral out of control, causing irreversible devastation across our
          planet. But <b>we need to act now</b>. We've created straight-forward
          guides on the choices you can make today, to take action and help
          prevent earth’s climate breaking down:
        </p>
      </div>
    </div>
    <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
      <ChoiceGridItems />
    </div>
  </section>
);

export default ChoiceGrid;

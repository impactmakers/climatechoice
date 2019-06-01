import React from "react";
import Styles from "./Styles.module.scss";

const ProductHuntBadge = () => (
  <div className={Styles.container}>
    <a
      href="https://www.producthunt.com/posts/climatechoice?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-climatechoice"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=156820&theme=light"
        alt="ClimateChoice - Learn how you can help prevent climate breakdown  🌎🔥 | Product Hunt Embed"
        className={Styles.producthunt}
      />
    </a>
  </div>
);

export default ProductHuntBadge;

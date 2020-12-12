import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Styles from "./Styles.module.scss";
import TwitterIcon from "../Images/Icons/TwitterIcon";
import FacebookIcon from "../Images/Icons/FacebookIcon";
import EmailIcon from "../Images/Icons/EmailIcon";

const AuthorCard = props => {
  const { title, url, description } = props;
  return (
    <div className={Styles.container}>
      <div className={Styles.topRow}>
        <OutboundLink className={Styles.link} href={url}>
          {title}
        </OutboundLink>
      </div>
      <div className={Styles.description}>{description}</div>
    </div>
  );
};

export default AuthorCard;

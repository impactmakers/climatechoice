import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Styles from "./Styles.module.scss";
import TwitterIcon from "../Images/Icons/TwitterIcon";

const AuthorCard = ({ author }) => {
  return (
    <div className={Styles.authorCard}>
      <button aria-label={"Author"}>{null}</button>
      <img className={Styles.authorAvatar} src={author.avatar} alt="Author" />
      <div className={Styles.authorContent}>
        <h3 className={Styles.authorTitle}>{author.id}</h3>
        <p className={Styles.authorBio}>{author.bio}</p>
        <ul className={Styles.links}>
          <li className={Styles.linkItem}>
            <OutboundLink
              className={Styles.link}
              href={`https://twitter.com/${author.twitter}`}
            >
              <TwitterIcon />
              Twitter
            </OutboundLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthorCard;

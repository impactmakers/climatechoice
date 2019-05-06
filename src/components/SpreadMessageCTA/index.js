import React from "react";

import styles from "./styles.module.scss";
import GlobalStyles from "../../styles/Global.module.scss";
import SocialButton from "../SocialButton";
import CopyLinkButton from "../SocialButton/CopyLinkButton";
import EmailButton from "../SocialButton/EmailButton";
import TwitterButton from "../SocialButton/TwitterButton";
import FacebookButton from "../SocialButton/FacebookButton";
import WhatsappButton from "../SocialButton/WhatsappButton";
import LinkedinButton from "../SocialButton/LinkedInButton";

export default function SpreadMessageCTA({
  children,
  ctaCopy,
  ctaTitle,
  socialTitle,
  socialCopy,
  socialButtons
}) {
  return (
    <div className={GlobalStyles.inner}>
      <div className={styles.container}>
        {/* cta block / right col */}
        <div className={styles.ctaCopy}>
          <div className={styles.title}>{ctaTitle}</div>
          <p className={styles.copy}>{ctaCopy}</p>
        </div>
        {children}
        {/* social block  / right col */}
        <div className={styles.socialBlock}>
          <h3 className={styles.subTitle}>{socialTitle}</h3>
          <p>{socialCopy}</p>
          <div className={styles.socialContainer}>
            <TwitterButton />
            <FacebookButton />
            <WhatsappButton />
            <LinkedinButton />
            <EmailButton />
            <CopyLinkButton />
          </div>
        </div>
      </div>
    </div>
  );
}

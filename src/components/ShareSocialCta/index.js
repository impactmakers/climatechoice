import React from "react";

import styles from "./Styles.module.scss";

import CopyLinkButton from "../SocialButtons/CopyLinkButton";
import EmailButton from "../SocialButtons/EmailButton";
import TwitterButton from "../SocialButtons/TwitterButton";
import FacebookButton from "../SocialButtons/FacebookButton";
import WhatsappButton from "../SocialButtons/WhatsappButton";
import LinkedinButton from "../SocialButtons/LinkedInButton";

export default function ShareSocialCta({
  children,
  ctaCopy,
  ctaTitle,
  emailBody,
  emailSubject,
  facebookQuote,
  facebookHashtag,
  linkedinTitle,
  linkedinDescription,
  socialTitle,
  socialCopy,
  twitterTitle,
  twitterAccount,
  twitterHashtags,
  url
}) {
  return (
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
          <TwitterButton
            url={url}
            twitterTitle={twitterTitle}
            twitterAccount={twitterAccount}
            hashtags={twitterHashtags}
          />
          <FacebookButton
            url={url}
            facebookQuote={facebookQuote}
            facebookHashtag={facebookHashtag}
          />
          <WhatsappButton />
          {/* do we want to show the whatsapp button on desktop? */}
          <LinkedinButton
            url={url}
            title={linkedinTitle}
            description={linkedinDescription}
          />
          <EmailButton emailBody={emailBody} emailSubject={emailSubject} />
          <CopyLinkButton />
        </div>
      </div>
    </div>
  );
}

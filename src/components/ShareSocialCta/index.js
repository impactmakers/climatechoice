import React from "react";
import GlobalStyles from "../../styles/Global.module.scss";
import styles from "./Styles.module.scss";
import { Location } from "@reach/router";

import CopyLinkButton from "../SocialButtons/CopyLinkButton";
import EmailButton from "../SocialButtons/EmailButton";
import TwitterButton from "../SocialButtons/TwitterButton";
import FacebookButton from "../SocialButtons/FacebookButton";
import WhatsappButton from "../SocialButtons/WhatsappButton";
import LinkedinButton from "../SocialButtons/LinkedInButton";

function ShareSocialCta({
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
  url,
  whatsappTitle,
  currentUrl
}) {
  return (
    <section className={styles.container}>
      <a name="share" />
      <div className={`${GlobalStyles.inner} ${styles.inner}`}>
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
          <ul className={styles.socialContainer}>
            <li className={styles.socialButton}>
              <TwitterButton
                url={url}
                currentUrl={currentUrl}
                twitterTitle={twitterTitle}
                twitterAccount={twitterAccount}
                hashtags={twitterHashtags}
              />
            </li>
            <li className={styles.socialButton}>
              <FacebookButton
                url={url}
                currentUrl={currentUrl}
                facebookQuote={facebookQuote}
                facebookHashtag={facebookHashtag}
              />
            </li>
            <li className={styles.socialButton}>
              <WhatsappButton url={url} whatsappTitle={whatsappTitle} />
            </li>
            <li className={styles.socialButton}>
              <LinkedinButton
                url={url}
                currentUrl={currentUrl}
                title={linkedinTitle}
                description={linkedinDescription}
              />
            </li>
            <li className={styles.socialButton}>
              <EmailButton
                emailBody={emailBody}
                currentUrl={currentUrl}
                emailSubject={emailSubject}
              />
            </li>
            <li className={styles.socialButton}>
              <CopyLinkButton currentUrl={currentUrl} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function(props) {
  return (
    <Location>
      {({ location }) => (
        <ShareSocialCta {...props} currentUrl={location.href} />
      )}
    </Location>
  );
}

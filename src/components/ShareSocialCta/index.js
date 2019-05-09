import React from 'react';
import GlobalStyles from '../../styles/Global.module.scss';
import styles from './Styles.module.scss';

import CopyLinkButton from '../SocialButtons/CopyLinkButton';
import EmailButton from '../SocialButtons/EmailButton';
import TwitterButton from '../SocialButtons/TwitterButton';
import FacebookButton from '../SocialButtons/FacebookButton';
import WhatsappButton from '../SocialButtons/WhatsappButton';
import LinkedinButton from '../SocialButtons/LinkedInButton';

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
  url,
  whatsappTitle
}) {
  return (
    <section className={styles.container}>
      <div className={`${GlobalStyles.inner} ${styles.inner}`}>
        {/* cta block / right col */}
        <div className={styles.ctaCopy}>
          <div className={styles.title}>{ctaTitle}</div>
          <p className={styles.copy}>{ctaCopy}</p>
        </div>
        {children}
        {/* social block  / right col */}
        <ul className={styles.socialBlock}>
          <h3 className={styles.subTitle}>{socialTitle}</h3>
          <p>{socialCopy}</p>
          <ul className={styles.socialContainer}>
            <li className={styles.socialButton}>
              <TwitterButton
                url={url}
                twitterTitle={twitterTitle}
                twitterAccount={twitterAccount}
                hashtags={twitterHashtags}
              />
            </li>
            <li className={styles.socialButton}>
              <FacebookButton
                url={url}
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
                title={linkedinTitle}
                description={linkedinDescription}
              />
            </li>
            <li className={styles.socialButton}>
              <EmailButton emailBody={emailBody} emailSubject={emailSubject} />
            </li>
            <li className={styles.socialButton}>
              <CopyLinkButton />
            </li>
          </ul>
        </ul>
      </div>
    </section>
  );
}

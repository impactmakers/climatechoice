import React from "react";

import styles from "./styles.module.scss";
import GlobalStyles from "../../styles/Global.module.scss";
import SocialButton from "../SocialButton";

import EmailIcon from "../Images/Icons/EmailIcon";
import CopyLinkIcon from "../Images/Icons/CopyLinkIcon";
import FacebookIcon from "../Images/Icons/FacebookIcon";
import LinkedinIcon from "../Images/Icons/LinkedinIcon";
import TwitterIcon from "../Images/Icons/TwitterIcon";
import WhatsappIcon from "../Images/Icons/WhatsappIcon";

const socialButtons = [
  {
    description: "Twitter",
    logo: <TwitterIcon fillColor="#76a9ea" />
  },
  {
    description: "Facebook",
    logo: <FacebookIcon fillColor="#1877f2" />
  },
  {
    description: "WhatsApp",
    logo: <WhatsappIcon fillColor="#40c351" />
  },
  {
    description: "LinkedIn",
    logo: <LinkedinIcon fillColor="rgb(0, 127, 177)" />
  },
  {
    description: "Email",
    logo: <EmailIcon fillColor="#898c92" />
  },
  {
    description: "Copy Link",
    logo: <CopyLinkIcon fillColor="#16243E" />
  }
];

export default function SpreadMessageCTA() {
  return (
    <div className={GlobalStyles.inner}>
      <div className={styles.container}>
        <div className={styles.ctaCopy}>
          <div className={styles.title}>Spread the Message!</div>
          <p className={styles.copy}>
            Don't assume everyone knows they should change the way that they eat
            to revent climate breakdown. We need everyone to become informed so
            they can also make a choice about what they eat.
          </p>
        </div>
        <div className={styles.socialBlock}>
          <h3 className={styles.subTitle}>
            Want to let others know how they can change what they eat?
          </h3>
          <p>
            Then share this web page with your friends, family and followers via
            our handy pre-written message!
          </p>

          <div className={styles.socialContainer}>
            {socialButtons.map(item => (
              <div className={styles.socialButtons}>
                <SocialButton description={item.description} logo={item.logo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

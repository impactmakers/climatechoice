import React from "react";
import styles from "./styles.module.scss";
import GlobalStyles from "../../styles/Global.module.scss";
import SocialButton from "../SocialButton";

const socialButtons = [
  {
    description: "Twitter"
  },
  {
    description: "Facebook"
  },
  {
    description: "WhatsApp"
  },
  {
    description: "LinkedIn"
  },
  {
    description: "Email"
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
          <p style={{ maxWidth: "80%", color: "#0d1626", lineHeight: "1.5em" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", width: "80%" }}
          >
            {socialButtons.map(item => (
              <div style={{ margin: "0 0.5em" }}>
                <SocialButton description={item.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

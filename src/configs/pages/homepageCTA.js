import React from "react";

import EmailIcon from "../Images/Icons/EmailIcon";
import CopyLinkIcon from "../Images/Icons/CopyLinkIcon";
import FacebookIcon from "../Images/Icons/FacebookIcon";
import LinkedinIcon from "../Images/Icons/LinkedinIcon";
import TwitterIcon from "../Images/Icons/TwitterIcon";
import WhatsappIcon from "../Images/Icons/WhatsappIcon";

const BoldText = ({ children }) => (
  <b style={{ fontWeight: "bold" }}>{children}</b>
);

export const socialButtons = [
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

export const ctaTitle = "Spread the Message!";

export const ctaCopy = (
  <>
    <BoldText>Dont assume</BoldText> everyone knows they should change the way
    that they eat to revent climate breakdown.{" "}
    <BoldText>We need everyone to become informed </BoldText>so they can also
    make a choice about what they eat.
  </>
);

export const socialTitle =
  "Want to let others know how they can change what they eat?";
export const socialCopy =
  "Then share this web page with your friends, family and followers via our handy pre-written message!";

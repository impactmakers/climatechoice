import React from "react";

import EmailIcon from "../../components/Images/Icons/EmailIcon";
import CopyLinkIcon from "../../components/Images/Icons/CopyLinkIcon";
import FacebookIcon from "../../components/Images/Icons/FacebookIcon";
import LinkedinIcon from "../../components/Images/Icons/LinkedinIcon";
import TwitterIcon from "../../components/Images/Icons/TwitterIcon";
import WhatsappIcon from "../../components/Images/Icons/WhatsappIcon";

const BoldText = ({ children }) => (
  <b style={{ fontWeight: "bold" }}>{children}</b>
);

const homePageConfig = {
  socialButtons: [
    {
      description: "Twitter",
      logo: <TwitterIcon fillColor="#76a9ea" />,
      href: "https://twitter.com/climatechoice"
    },
    {
      description: "Facebook",
      logo: <FacebookIcon fillColor="#1877f2" />
    },
    {
      description: "WhatsApp",
      logo: <WhatsappIcon fillColor="#40c351" /> // should we only show this on mobile?
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
      logo: <CopyLinkIcon fillColor="#16243E" />,
      onClick: () => {
        const input = document.createElement("input"),
          text = window.location.href;

        document.body.appendChild(input);
        input.value = text;
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        alert("copied to clipboard");
      }
    }
  ],

  ctaTitle: "Spread the Message!",

  ctaCopy: (
    <>
      <BoldText>Dont assume</BoldText> everyone knows they should change the way
      that they eat to revent climate breakdown.{" "}
      <BoldText>We need everyone to become informed </BoldText>so they can also
      make a choice about what they eat.
    </>
  ),

  socialTitle: "Want to let others know how they can change what they eat?",
  socialCopy:
    "Then share this web page with your friends, family and followers via our handy pre-written message!"
};

export default homePageConfig;

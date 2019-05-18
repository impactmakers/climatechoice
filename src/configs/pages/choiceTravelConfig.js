import React from "react";

const BoldText = ({ children }) => (
  <b style={{ fontWeight: "bold" }}>{children}</b>
);

const choiceTravelConfig = {
  ctaTitle: "Spread the word!",

  ctaCopy: (
    <>
      <BoldText>Don't assume</BoldText> everyone knows they should change the way
      that they travel to prevent climate breakdown.{' '}
      <BoldText>We need everyone to become informed </BoldText>so they can also
      make a choice about how they travel.
    </>
  ),
  emailSubject: "Join me in helping prevent climate change!",
  emailBody:
    "Hey! The choices we make today can help prevent earth’s climate breaking down 🌎🔥 Check out this site to learn how you can change how you travel to reduce your carbon footprint 👣 https://climatechoice.co/change-how-you-travel/",
  linkedinTitle: "ClimateChoice",
  linkedinDescription:
    "Learn how you can help prevent earth’s climate breaking down by changing how you travel",
  twitterTitle:
    "Learn how you can help prevent earth’s climate breaking down by changing how you travel",
  twitterAccount: "climatechoice",
  twitterHashtags: ["climatechange", "climatebreakdown"],
  socialTitle: "Want to let others know how they can change how they travel?",
  socialCopy:
    "Then share this web page with your friends, family and followers via our handy pre-written message!",
  url: "https://climatechoice.co/change-how-you-travel/",
  whatsappTitle:
    "Hey! The choices we make today can help prevent earth’s climate breaking down 🌎🔥 Check out this site to learn how you can change how you travel to reduce your carbon footprint 👣"
};

export default choiceTravelConfig;

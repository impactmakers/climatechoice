import React from "react";

const BoldText = ({ children }) => (
  <b style={{ fontWeight: "bold" }}>{children}</b>
);

const choiceLifestyleConfig = {
  ctaTitle: "Spread the word!",

  ctaCopy: (
    <>
      <BoldText>Don't assume</BoldText> everyone knows they should change their
      lifestyle to help prevent climate breakdown.{" "}
      <BoldText>We need everyone to become informed </BoldText>so they can also
      make changes to the way they live.
    </>
  ),
  emailSubject: "Join me in helping prevent climate change!",
  emailBody:
    "Hey! The choices we make today can help prevent earth’s climate breaking down 🌎🔥 Check out this site to learn how you can change your lifestyle to reduce your carbon footprint 👣 https://climatechoice.co/change-your-lifestyle/",
  linkedinTitle: "ClimateChoice",
  linkedinDescription:
    "Learn how you can help prevent earth’s climate breaking down by changing your lifestyle",
  twitterTitle:
    "Learn how you can help prevent earth’s climate breaking down by changing your lifestyle",
  twitterAccount: "climatechoice",
  twitterHashtags: ["climatechange", "climatebreakdown"],
  socialTitle: "Want to let others know how they can change their lifestyle?",
  socialCopy:
    "Then share this web page with your friends, family and followers via our handy pre-written message!",
  url: "https://climatechoice.co/change-your-lifestyle/",
  whatsappTitle:
    "Hey! The choices we make today can help prevent earth’s climate breaking down 🌎🔥 Check out this site to learn how you can change your lifestyle to reduce your carbon footprint 👣"
};

export default choiceLifestyleConfig;

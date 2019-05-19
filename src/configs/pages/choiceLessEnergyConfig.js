import React from "react";

const BoldText = ({ children }) => (
  <b style={{ fontWeight: "bold" }}>{children}</b>
);

const choiceLessEnergyConfig = {
  ctaTitle: "Spread the word!",

  ctaCopy: (
    <>
      <BoldText>Don't assume</BoldText> everyone knows they should use less
      energy to help prevent climate breakdown.{" "}
      <BoldText>We need everyone to become informed </BoldText>so they can also
      make a choice about how use energy.
    </>
  ),
  emailSubject: "Join me in helping prevent climate change!",
  emailBody:
    "Hey! The choices we make today can help prevent earth’s climate breaking down 🌎🔥 Check out this site to learn how you can change use less energy to reduce your carbon footprint 👣 https://climatechoice.co/use-less-energy/",
  linkedinTitle: "ClimateChoice",
  linkedinDescription:
    "Learn how you can help prevent earth’s climate breaking down by using less energy",
  twitterTitle:
    "Learn how you can help prevent earth’s climate breaking down by using less energy",
  twitterAccount: "climatechoice",
  twitterHashtags: ["climatechange", "climatebreakdown"],
  socialTitle: "Want to let others know how they can use less energy?",
  socialCopy:
    "Then share this web page with your friends, family and followers via our handy pre-written message!",
  url: "https://climatechoice.co/use-less-energy/",
  whatsappTitle:
    "Hey! The choices we make today can help prevent earth’s climate breaking down 🌎🔥 Check out this site to learn how you can change use less energy to reduce your carbon footprint 👣"
};

export default choiceLessEnergyConfig;

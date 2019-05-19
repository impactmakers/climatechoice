import React from "react";

const BoldText = ({ children }) => (
  <b style={{ fontWeight: "bold" }}>{children}</b>
);

const homePageConfig = {
  ctaTitle: "Spread the word!",

  ctaCopy: (
    <>
      <BoldText>Dont assume</BoldText> everyone knows about the choices they can
      make today to help prevent climate breakdown.{" "}
      <BoldText>We need everyone to become aware of what they can do</BoldText>.
      That way they can make informed decisions.
    </>
  ),
  emailSubject: "Join me in helping prevent climate change!",
  emailBody:
    "Hey! The choices we make today can help prevent earth’s climate breaking down 🌎🔥 Check out this site to learn how you can make simple changes to reduce your carbon footprint 👣 https://climatechoice.co/",
  linkedinTitle: "ClimateChoice",
  linkedinDescription:
    "Learn how you can help prevent earth’s climate breaking down.",
  facebookHashtag: "#climatechange",
  twitterTitle: "Learn how you can help prevent earth’s climate breaking down",
  twitterAccount: "climatechoice",
  twitterHashtags: ["climatechange", "climatebreakdown"],
  socialTitle: "Want to help others learn what to do about climate breakdown?",
  socialCopy:
    "Then please share ClimateChoice with your friends, family and followers via our handy pre-written message!",
  url: "https://climatechoice.co/",
  whatsappTitle:
    "Hey! The choices we make today can help prevent earth’s climate breaking down 🌎🔥 Check out this site to learn how you can make simple changes to reduce your carbon footprint 👣 https://climatechoice.co/"
};

export default homePageConfig;

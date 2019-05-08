import React from "react";

const BoldText = ({ children }) => (
  <b style={{ fontWeight: "bold" }}>{children}</b>
);

const homePageConfig = {
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
    "Then share this web page with your friends, family and followers via our handy pre-written message!",
  url: "https://climatechoice.co",
  linkedinTitle: "Climate Choice",
  linkedinDescription:
    "Discover how changes to your diet can affect Climate Change",
  twitterTitle:
    "Check out how you can change your diet and positively affect climate change at",
  twitterAccount: "climatechoice",
  hashtags: ["climatechange"]
};

export default homePageConfig;

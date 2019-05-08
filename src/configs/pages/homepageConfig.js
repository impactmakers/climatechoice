import React from "react";

const BoldText = ({ children }) => (
  <b style={{ fontWeight: "bold" }}>{children}</b>
);

const homePageConfig = {
  ctaTitle: "Spread the Message!",

  ctaCopy: (
    <>
      <BoldText>Dont assume</BoldText> everyone knows they should change the way
      that they eat to prevent climate breakdown.{" "}
      <BoldText>We need everyone to become informed </BoldText>so they can also
      make a choice about what they eat.
    </>
  ),
  emailSubject: "Just saw this new site: Climate Choice",
  emailBody: "I thought you might find this interesting",
  linkedinTitle: "Climate Choice",
  linkedinDescription:
    "Discover how changes to your diet can affect Climate Change",
  facebookQuote:
    "Check out how you can change your diet and positively affect climate change at:",
  facebookHashtag: "#climatechange",
  twitterTitle:
    "Check out how you can change your diet and positively affect climate change at",
  twitterAccount: "climatechoice",
  twitterHashtags: ["climatechange"],
  socialTitle: "Want to let others know how they can change what they eat?",
  socialCopy:
    "Then share this web page with your friends, family and followers via our handy pre-written message!",
  url: "https://climatechoice.co"
};

export default homePageConfig;

import React from 'react';

const BoldText = ({ children }) => (
  <b style={{ fontWeight: 'bold' }}>{children}</b>
);

const choiceEatConfig = {
  ctaTitle: 'Spread the word!',

  ctaCopy: (
    <>
      <BoldText>Dont assume</BoldText> everyone knows they should change the way
      that they eat to prevent climate breakdown.{' '}
      <BoldText>We need everyone to become informed </BoldText>so they can also
      make a choice about how they eat.
    </>
  ),
  emailSubject: 'Check this out: Climate Choice',
  emailBody:
    'Learn how you can change how you eat to help prevent climate change https://climatechoice.co/change-how-you-eat/',
  linkedinTitle: 'ClimateChoice',
  linkedinDescription:
    'Discover how changes to your diet can affect Climate Change',
  facebookQuote:
    'Check out how you can change your diet and positively affect climate change at:',
  facebookHashtag: '#climatechange',
  twitterTitle:
    'Check out how you can change your diet and positively affect climate change at',
  twitterAccount: 'climatechoice',
  twitterHashtags: ['climatechange', 'climatebreakdown'],
  socialTitle: 'Want to let others know how they can change how they eat?',
  socialCopy:
    'Then share this web page with your friends, family and followers via our handy pre-written message!',
  url: 'https://climatechoice.co/change-how-you-eat/',
  whatsappTitle: 'check out this new site, ClimateChoice'
};

export default choiceEatConfig;

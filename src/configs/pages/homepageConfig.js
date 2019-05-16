import React from 'react';

const BoldText = ({ children }) => (
  <b style={{ fontWeight: 'bold' }}>{children}</b>
);

const homePageConfig = {
  ctaTitle: 'Spread the word!',

  ctaCopy: (
    <>
      <BoldText>Dont assume</BoldText> everyone knows about the choices they
      should make to help prevent climate breakdown.{' '}
      <BoldText>We need everyone to become aware of what they can do</BoldText>.
      That way they can make informed decisions.
    </>
  ),
  emailSubject: 'Just saw this new site: ClimateChoice',
  emailBody:
    'I thought you might find this interesting. It makes it easy to learn how you can help prevent earth’s climate breaking down. https://climatechoice.co/',
  linkedinTitle: 'ClimateChoice',
  linkedinDescription:
    'Learn how you can help prevent earth’s climate breaking down.',
  facebookQuote:
    'Check out how you can change your diet and positively affect climate change at:',
  facebookHashtag: '#climatechange',
  twitterTitle:
    'Check out how you can change your diet and positively affect climate change at',
  twitterAccount: 'climatechoice',
  twitterHashtags: ['climatechange'],
  socialTitle: 'Want to help others learn what to do about climate breakdown?',
  socialCopy:
    'Then please share ClimateChoice with your friends, family and followers via our handy pre-written message!',
  url: 'https://climatechoice.co/',
  whatsappTitle: 'check out this new site, Climate Choice'
};

export default homePageConfig;

import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

const Redirect = ({ intl }) => {
  return <SEO title={`${intl.formatMessage({ id: "title" })}`} />;
};

export default injectIntl(Redirect);

import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import FooterCta from "../../components/FooterCta";

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact ClimateChoice and learn how to contribute"
      keywords={[`Contact`, `ClimateChoice`]}
    />
    <section
      className={`${GlobalStyles.container} ${GlobalStyles.subpageContainer}`}
    >
      <div className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner}`}>
        <div className={GlobalStyles.subpageContent}>
          <h1 className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}>
            Contact & contribute
          </h1>
          <h3>General enquiries & feedback</h3>
          <p>
            <ul>
              <li>
                {" "}
                <a href="mailto:yourclimatechoice@gmail.com" title="Email us">
                  Email us
                </a>
              </li>
              <li>
                <OutboundLink
                  href="https://twitter.com/climatechoice"
                  title="Tweet @climatechoice"
                >
                  Tweet @climatechoice
                </OutboundLink>
              </li>
            </ul>
            <div id="contribute" aria-label={"Contribute"}>
              {" "}
            </div>
          </p>
          <br />
          <h3>Want to help with the site?</h3>
          <p>
            {" "}
            <Link to="/" title="Go home">
              ClimateChoice
            </Link>{" "}
            is a non-profit project created by a{" "}
            <OutboundLink
              href="https://techimpactmakers.com"
              title="Impact Makers"
            >
              community of tech volunteers
            </OutboundLink>
            , working to prevent climate breakdown.
          </p>
          <p>
            If you're interested in contributing to ClimateChoice please{" "}
            <a href="mailto:yourclimatechoice@gmail.com" title="Email us">
              send us an email
            </a>
            ,{" "}
            <OutboundLink
              href="https://github.com/impactmakers/climatechoice/blob/master/CONTRIBUTING.md"
              title="ClimateChoice GitHub Contributing Guide"
            >
              swing by GitHub to help us work on some issues
            </OutboundLink>
            , or{" "}
            <OutboundLink
              href="https://join.slack.com/t/impact-makers-group/shared_invite/enQtNjQ2MTY3NDM1MjcxLWUwNjA1YWViZmI1NjQ5YTIzMjA1OWE2NzI3NzMwNzQ0ODBiMmZlMzI0YTI4MDUyMzlhNmZhZDFiOWZkODQ0Yjg"
              title="The Impact Makers Slack"
            >
              join the Impact Makers Slack community
            </OutboundLink>{" "}
            to discuss how you can help. It doesn't matter what your skill set
            is, all motivated people are welcome!
          </p>
          <br />
          <h4>Contributors so far:</h4>
          <p>
            <ul>
              <li>
                <OutboundLink
                  href="https://twitter.com/shylands"
                  title="Follow @shylands on Twitter"
                >
                  Steven Hylands
                </OutboundLink>{" "}
                - Design, content, development
              </li>
              <li>
                <OutboundLink
                  href="https://twitter.com/tobequitefrank1"
                  title="Follow @tobequitefrank1 on Twitter"
                >
                  Rachel Franklin
                </OutboundLink>{" "}
                - Development
              </li>
              <li>
                <OutboundLink
                  href="https://twitter.com/thepaulmcbride"
                  title="Follow @thepaulmcbride on Twitter"
                >
                  Paul McBride
                </OutboundLink>{" "}
                - Development
              </li>
              <li>
                <OutboundLink
                  href="https://twitter.com/barrymcgee"
                  title="Follow @barrymcgee on Twitter"
                >
                  Barry McGee
                </OutboundLink>{" "}
                - Development
              </li>
              <li>
                <OutboundLink
                  href="https://au.linkedin.com/in/stefanos-bekiaris-01ab18113"
                  title="View on Linkedin"
                >
                  Stefanos Bekiaris
                </OutboundLink>{" "}
                - Development / Content
              </li>
              <li>
                <OutboundLink
                  href="https://github.com/eostrom"
                  title="Follow on Github"
                >
                  Erik Ostrom
                </OutboundLink>{" "}
                - Development
              </li>
              <li>
                <OutboundLink
                  href="https://github.com/mfix22"
                  title="Follow on Github"
                >
                  Michael Fix
                </OutboundLink>{" "}
                - Development
              </li>
              <li>
                <OutboundLink
                  href="https://github.com/exoen"
                  title="Follow on Github"
                >
                  Andreas Lilleskare
                </OutboundLink>{" "}
                - Development
              </li>
              <li>
                <OutboundLink
                  href="https://github.com/demir-delic"
                  title="Follow on Github"
                >
                  Demir Delic
                </OutboundLink>{" "}
                - Development
              </li>
              <li>
                <OutboundLink
                  href="https://github.com/andrew-pyle"
                  title="Follow on Github"
                >
                  Andrew Pyle
                </OutboundLink>{" "}
                - Development
              </li>
              <li>
                <OutboundLink
                  href="https://twitter.com/alexprice"
                  title="Follow @remotealex on Twitter"
                >
                  Alex Price
                </OutboundLink>{" "}
                - Feedback
              </li>
              <li>
                <OutboundLink
                  href="https://twitter.com/yesthatjon"
                  title="Follow @yesthatyon on Twitter"
                >
                  Jon Williams
                </OutboundLink>{" "}
                - Feedback
              </li>
              <li>
                <OutboundLink
                  href="https://twitter.com/coadstream"
                  title="Follow @coadstream on Twitter"
                >
                  Elliot Coad
                </OutboundLink>{" "}
                - Feedback
              </li>
              <li>
                <OutboundLink
                  href="https://twitter.com/arcanerobobrain"
                  title="Follow @arcanerobobrain on Twitter"
                >
                  James Haywood
                </OutboundLink>{" "}
                - Feedback
              </li>
              <li>
                <OutboundLink
                  href="https://twitter.com/philsturgeon"
                  title="Follow @philsturgeon on Twitter"
                >
                  Phil Sturgeon
                </OutboundLink>{" "}
                - Feedback / Content
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default ContactPage;

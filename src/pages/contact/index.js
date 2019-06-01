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
          <h2>General enquiries & feedback</h2>
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
            <div id="#contribute" aria-label={"Contribute"}> </div>
          </p>
          <br />
          <h2>Want to help with the site?</h2>
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
            If you're interested in volunteering some of your time to contribute
            to ClimateChoice please{" "}
            <a href="mailto:yourclimatechoice@gmail.com" title="Email us">
              send us an email
            </a>{" "}
            or{" "}
            <OutboundLink
              href="https://join.slack.com/t/impact-makers-group/shared_invite/enQtNjQ2MTY3NDM1MjcxLWUwNjA1YWViZmI1NjQ5YTIzMjA1OWE2NzI3NzMwNzQ0ODBiMmZlMzI0YTI4MDUyMzlhNmZhZDFiOWZkODQ0Yjg"
              title="The Impact Makers Slack"
            >
              join the Impact Makers slack community
            </OutboundLink>{" "}
            to discuss how you can help. It doesn't matter what your skill set
            is, all motiviated people are welcome!
          </p>
          <br />
          <h3>Contributors so far:</h3>
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
            </ul>
          </p>
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default ContactPage;

import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import Styles from "./Styles.module.scss";
import FooterCta from "../../components/FooterCta";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact ClimateChoice and learn how to contribute" keywords={[`Contact`, `ClimateChoice`]} />
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
                <a
                  href="https://twitter.com/climatechoice"
                  title="Tweet @climatechoice"
                >
                  Tweet @climatechoice
                </a>
              </li>
            </ul>
            <a name="contribute" />
          </p>
          <br />
          <h2>Want to help with the site?</h2>
          <p>
            {" "}
            <a href="https://climatechoice.co/" title="Go home">
              ClimateChoice
            </a>{" "}
            is a non-profit project created by a{" "}
            <a href="https://techimpactmakers.com" title="Impact Makers">
              community of tech volunteers
            </a>
            , working to prevent climate breakdown.
          </p>
          <p>
            If you're interested in volunteering some of your time to contribute
            to ClimateChoice please{" "}
            <a href="mailto:yourclimatechoice@gmail.com" title="Email us">
              send us an email
            </a>{" "}
            or{" "}
            <a
              href="https://join.slack.com/t/impact-makers-group/shared_invite/enQtNjE1NjU0OTU0MTY1LTg2MmVjNjBkY2FiNDVlYmM3ZjQxYmYyNTlhMzc0Y2MxYzYwYjE5ZWFmMWE1MmM4OTg4NzA5NTE3M2M5OTRiNDk"
              title="The Impact Makers Slack"
            >
              join the Impact Makers slack community
            </a>{" "}
            to discuss how you can help. It doesn't matter what your skillset
            is, all motiviated people are welcome!
          </p>
          <br />
          <h3>Contributors so far:</h3>
          <p>
            <ul>
              <li>
                <a
                  href="https://twitter.com/shylands"
                  title="Follow @shylands on Twitter"
                >
                  Steven Hylands
                </a>{" "}
                - Design, content, development
              </li>
              <li>
                <a
                  href="https://twitter.com/tobequitefrank1"
                  title="Follow @tobequitefrank1 on Twitter"
                >
                  Rachel Franklin
                </a>{" "}
                - Development
              </li>
              <li>
                <a
                  href="https://twitter.com/thepaulmcbride"
                  title="Follow @thepaulmcbride on Twitter"
                >
                  Paul McBride
                </a>{" "}
                - Development
              </li>
              <li>
                <a
                  href="https://twitter.com/barrymcgee"
                  title="Follow @barrymcgee on Twitter"
                >
                  Barry McGee
                </a>{" "}
                - Development
              </li>
              <li>
                <a
                  href="https://twitter.com/alexprice"
                  title="Follow @remotealex on Twitter"
                >
                  Alex Price
                </a>{" "}
                - Feedback
              </li>
              <li>
                <a
                  href="https://twitter.com/yesthatjon"
                  title="Follow @yesthatyon on Twitter"
                >
                  Jon Williams
                </a>{" "}
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

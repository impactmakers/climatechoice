import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import FooterCta from "../../components/FooterCta";

const AboutPage = () => (
  <Layout>
    <SEO
      title="About ClimateChoice"
      description="ClimateChoice is a non-profit volunteer project from Steven Hylands, Rachel Franklin, Paul McBride that launched in May 2019. The project was developed with the help of the Impact Makers group — a community of tech people who want to have a positive impact by helping prevent earth’s climate breaking down."
      keywords={[`About Climate Choice`, `ClimateChoice`]}
    />
    <section
      className={`${GlobalStyles.container} ${GlobalStyles.subpageContainer}`}
    >
      <div className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner}`}>
        <div className={GlobalStyles.subpageContent}>
          <h1 className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}>
            About ClimateChoice
          </h1>

          <p>
            ClimateChoice is a non-profit volunteer project from{" "}
            <OutboundLink
              href="https://twitter.com/shylands"
              title="Follow @shylands on Twitter"
            >
              Steven Hylands
            </OutboundLink>
            ,{" "}
            <OutboundLink
              href="https://twitter.com/tobequitefrank1"
              title="Follow @tobequitefrank1 on Twitter"
            >
              Rachel Franklin
            </OutboundLink>
            ,{" "}
            <OutboundLink
              href="https://twitter.com/thepaulmcbride"
              title="Follow @thepaulmcbride on Twitter"
            >
              Paul McBride
            </OutboundLink>{" "}
            ,{" "}
            <OutboundLink
              href="https://twitter.com/barrymcgee"
              title="Follow @barrymcgee on Twitter"
            >
              Barry McGee
            </OutboundLink>{" "}
            and{" "}
            <OutboundLink
              href="https://twitter.com/thisismbd"
              title="Follow @thisismbd on Twitter"
            >
              Matt Budde
            </OutboundLink>{" "}
            that launched in May 2019. The project was developed with the help
            of the{" "}
            <OutboundLink
              href="https://techimpactmakers.com"
              title="Impact Makers"
            >
              Impact Makers
            </OutboundLink>{" "}
            group — a community of tech people who want to have a positive
            impact by helping prevent earth’s climate breaking down. Read this
            to{" "}
            <OutboundLink
              href="https://shylands.com/blog/helping-prevent-climate-breakdown/"
              title="Origins of ClimateChoice and Impact Makers"
            >
              learn more about the origins of ClimateChoice and Impact Makers
            </OutboundLink>
            .
          </p>
          <br />
          <h3>Why we decided to make ClimateChoice</h3>
          <p>
            <b>
              Our planet's climate is breaking down and we aren’t doing enough
              about it
            </b>
            . If we all made a few life changes and supported the right people,
            we’d be better positioned to stop forthcoming environmental
            disasters.
          </p>
          <p>
            When it comes to taking action, there’s so much information out
            there that sometimes it’s hard to know where to start, or what to
            believe. We decided to create ClimateChoice as we didn’t believe
            there was a single point of truth which you could visit to quickly
            learn what you can do today to help prevent climate breakdown.
            ClimateChoice is designed to be easily shared so you can let your
            friends and family know how they take action too.
          </p>
          <br />
          <h3>Future Developments</h3>
          <p>
            ClimateChoice is a work in progress. We plan to add more choice
            guides and to continually improve the site so we can provide you
            with the best possible place to learn about how to prevent climate
            breakdown.
          </p>
          <p>
            If you have any feedback or would like to contribute, feel free to{" "}
            <a href="mailto:yourclimatechoice@gmail.com" title="Email us">
              email
            </a>{" "}
            or{" "}
            <OutboundLink
              href="https://twitter.com/climatechoice"
              title="Tweet @climatechoice"
            >
              tweet us
            </OutboundLink>
            . If you’re interested in working on your own project to raise
            awareness of the climate breakdown issue and help people to take
            action, then please{" "}
            <OutboundLink
              href="https://techimpactmakers.com"
              title="Impact Makers"
            >
              {" "}
              join us in the Impact Makers
            </OutboundLink>{" "}
            community!
          </p>
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default AboutPage;

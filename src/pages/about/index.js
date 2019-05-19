import React from "react";
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
            <a
              href="https://twitter.com/shylands"
              title="Follow @shylands on Twitter"
            >
              Steven Hylands
            </a>
            ,{" "}
            <a
              href="https://twitter.com/tobequitefrank1"
              title="Follow @tobequitefrank1 on Twitter"
            >
              Rachel Franklin
            </a>
            ,{" "}
            <a
              href="https://twitter.com/thepaulmcbride"
              title="Follow @thepaulmcbride on Twitter"
            >
              Paul McBride
            </a>{" "}
            that launched in May 2019. The project was developed with the help
            of the{" "}
            <a href="https://techimpactmakers.com" title="Impact Makers">
              Impact Makers
            </a>{" "}
            group — a community of tech people who want to have a positive
            impact by helping prevent earth’s climate breaking down. Read this
            to{" "}
            <a
              href="https://shylands.com/blog/helping-prevent-climate-breakdown/"
              title="Origins of ClimateChoice and Impact Makers"
            >
              learn more about the origins of ClimateChoice and Impact Makers
            </a>
            .
          </p>
          <br />
          <h2>Why we decided to make ClimateChoice</h2>
          <p>
            <b>
              Our planet's climate is breakdown down and we aren’t doing enough
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
          <h2>Future Developments</h2>
          <p>
            ClimateChoice is a work in progress. We plan on adding more choice
            guides and to continually improve the site so we can provide you
            with the best possible place to learn about how to prevent climate
            breakdown.
          </p>
          <p>
            If you have any feedback or would like to contribute feel free to{" "}
            <a href="mailto:yourclimatechoice@gmail.com" title="Email us">
              email
            </a>{" "}
            or{" "}
            <a
              href="https://twitter.com/climatechoice"
              title="Tweet @climatechoice"
            >
              tweet us
            </a>
            . If you’re interested in working on your own project to raise
            awareness of the climate breakdown issue and help people to take
            action. Then please{" "}
            <a href="https://techimpactmakers.com" title="Impact Makers">
              {" "}
              join us in the Impact Makers
            </a>{" "}
            community!
          </p>
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default AboutPage;

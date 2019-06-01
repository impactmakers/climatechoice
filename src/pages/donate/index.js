import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import FooterCta from "../../components/FooterCta";

const DonatePage = () => (
  <Layout>
    <SEO
      title="Donate to ClimateChoice and other climate causes"
      description="Donate to the development of ClimateChoice and other Impact Makers projects, or find a cause to donate to that's working to prevent climate breakdown."
      keywords={[`Donate`, `ClimateChoice`]}
    />
    <section
      className={`${GlobalStyles.container} ${GlobalStyles.subpageContainer}`}
    >
      <div className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner}`}>
        <div className={GlobalStyles.subpageContent}>
          <h1 className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}>
            Donations
          </h1>{" "}
          <h2>Donate to the development of this site and others</h2>
          <p>
            {" "}
            <Link to="https://climatechoice.co/" title="Go home">
              ClimateChoice
            </Link>{" "}
            is a non-profit project created by the{" "}
            <OutboundLink
              href="https://techimpactmakers.com"
              title="Impact Makers"
            >
              Impact Makers
            </OutboundLink>{" "}
            community of tech volunteers, working to prevent earth's climate
            breaking down. Any donations made will be put towards the
            development of ClimateChoice and other non-profit Impact Makers
            projects which help raise awareness of the climate issue, and people
            to take action.
          </p>
          <div className={Styles.ctaActions}>
            <OutboundLink
              className={Styles.ctaButton}
              href="https://liberapay.com/impactmakers/"
              title="Donate to Impact Makers"
            >
              <button
                className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
                  ButtonStyles.btnPrimary
                } ${ButtonStyles.btnMobile} `}
              >
                Donate to Impact Makers
              </button>
            </OutboundLink>
          </div>
          <div id="#causes" aria-label={"Ways of preventing climate breakdown"}>{null}</div>
          <h2>Donate to causes working to prevent climate breakdown</h2>
          <p>
            We're crowdsourcing a resource which lists charities, movements and
            organisations around the world that you can contribute to. Have a
            look below and see if you can find a cause that you can relate to.
            You can also{" "}
            <OutboundLink
              href="https://airtable.com/shrpNApDRD7EVtHGv"
              title="Add somewhere you can donate"
            >
              contribute your own via this form
            </OutboundLink>
            .
          </p>
          <iframe
            className={Styles.airtable}
            className="airtable-embed"
            src="https://airtable.com/embed/shrnl2Jqc6Wc3UXeg?backgroundColor=blue&viewControls=on"
            frameborder="0"
            onmousewheel=""
            width="100%"
            height="533"
            title="Airtable form embed"
          />
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default DonatePage;

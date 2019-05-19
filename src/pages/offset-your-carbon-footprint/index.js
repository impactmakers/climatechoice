import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import FooterCta from "../../components/FooterCta";

const OffsetPage = () => (
  <Layout>
    <SEO
      title="Offset your carbon footprint"
      description="Find out how you can reduce the size of your carbon footprint by paying to plant trees, support climate projects and more"
      keywords={[
        `Offset`,
        `ClimateChoice``Offsetting`,
        `Offset carbon footprint`,
        `Reduce your carbon footprint`,
        `Pay to help climate change`,
        `Plant trees and offset`,
        `Offsetting emissions`
      ]}
    />
    <section
      className={`${GlobalStyles.container} ${GlobalStyles.subpageContainer}`}
    >
      <div className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner}`}>
        <div className={GlobalStyles.subpageContent}>
          <h1 className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}>
            Offset your carbon footprint
          </h1>
          <h2>Assess your impact</h2>
          <p>
            <ul>
              <li>
                <OutboundLink
                  href="https://www.myclimate.org/"
                  title="MyClimate Calculator"
                >
                  MyClimate Emissions Calculator
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="https://climatecare.org/calculator/"
                  title="ClimateCare Carbon Calculator"
                >
                  ClimateCare Carbon Calculator
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="https://offset.climateneutralnow.org/footprintcalc"
                  title="UN carbon footprint calculator"
                >
                  UN carbon Footprint Calculator
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="https://www.bbc.com/news/science-environment-46459714"
                  title="BBC Climate Change Food Calculator"
                >
                  BBC Climate Change Food Calculator
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="https://www.carbontrim.app/"
                  title="Carbon Trim iOS app"
                >
                  Carbon Trim iOS app
                </OutboundLink>
              </li>
            </ul>
          </p>
          <h2>Paid offsetting services</h2>
          <p>
            <ul>
              <li>
                <OutboundLink
                  href="https://offset.climateneutralnow.org/"
                  title="UN Carbon Offset Platform"
                >
                  UN Carbon Offset Platform
                </OutboundLink>{" "}
              </li>
              <li>
                <OutboundLink
                  href="https://mossy.earth/collections/carbon-offsetting"
                  title="Mossy Earth"
                >
                  Mossy Earth
                </OutboundLink>{" "}
              </li>
              <li>
                <OutboundLink
                  href="https://offset.earth/#"
                  title="Offset Earth"
                >
                  Offset Earth
                </OutboundLink>{" "}
                - Launching later this year
              </li>
            </ul>
          </p>
          <p>
            <h2>Free offsetting services</h2>
            <ul>
              <li>
                <OutboundLink href="https://flygrn.com/" title="FlyGRN">
                  FlyGrn
                </OutboundLink>{" "}
                - Book flights and offset them for free
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default OffsetPage;

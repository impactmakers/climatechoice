import React, { useEffect } from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import Styles from "./styles.module.scss";
import FooterCta from "../../components/FooterCta";
import DirectoryLink from "../../components/DirectoryLink";

const DirectoryPage = ({ data }) => {
  const links = data.allAirtable.nodes.map(({ data }) => data);
  const categories = links
    .reduce((memo, { categories }) => memo.concat(categories), [])
    .filter((v, i, a) => a.indexOf(v) === i)
    .filter(x => x)
    .map(category => {
      return {
        title: category.replace(/(\w)-(\w)/, "$1 $2").toUpperCase(),
        links: links.filter(({ categories }) =>
          (categories || []).includes(category)
        )
      };
    });
  return (
    <Layout>
      <SEO title="Link Directory" keywords={[`Directory`, `ClimateChoice`]} />
      <section
        className={`${GlobalStyles.container} ${GlobalStyles.subpageContainer}`}
      >
        <div className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner}`}>
          <div className={GlobalStyles.subpageContent}>
            <h1
              className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}
            >
              Link Directory
            </h1>
            {categories.map(({ title, links }) => (
              <>
                <h2>{title}</h2>
                <ul>
                  {links.map(link => (
                    <li key={link.url}>
                      <DirectoryLink {...link} />
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </div>
        </div>
      </section>
      <FooterCta />
    </Layout>
  );
};

export const query = graphql`
  query DirectoryQuery {
    allAirtable {
      nodes {
        data {
          title
          countries
          description
          url
          tags
          categories
          status
          featured
          instagram
          twitter
        }
      }
    }
  }
`;
export default DirectoryPage;

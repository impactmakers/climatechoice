import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import Styles from "./blog.module.scss";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" keywords={[`blog`, `ClimateChoice`]} />
        <section className={Styles.container}>
          <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
            <h1 className={Styles.title}>Blog</h1>
          </div>
        </section>
        <section className={Styles.contentItemsContainer}>
          <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
            <div className={Styles.contentItems}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <div className={Styles.contentItem} key={node.fields.slug}>
                    <Link
                      className={Styles.contentItemLink}
                      to={node.fields.slug}
                    >
                      <div className={Styles.contentImage}>
                        <img
                          src={node.frontmatter.image}
                          alt={node.frontmatter.title}
                        />
                      </div>
                      <div className={Styles.contentText}>
                        <h2 className={Styles.contentTitle}>{title}</h2>

                        <p
                          className={Styles.contentExcerpt}
                          dangerouslySetInnerHTML={{ __html: node.excerpt }}
                        />
                        <div className={Styles.contentMeta}>
                          <div className={Styles.contentAuthor}>
                            <img
                              className={Styles.contentAuthorAvatar}
                              src={node.frontmatter.author.avatar}
                              alt={node.frontmatter.author.id}
                            />
                            <span className={Styles.contentAuthorName}>
                              By <b>{node.frontmatter.author.id}</b>
                            </span>
                          </div>
                          <span className={Styles.contentDate}>
                            {node.frontmatter.date}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image
            author {
              id
              avatar
            }
          }
        }
      }
    }
  }
`;

import React from 'react';
import { Link, graphql } from 'gatsby';
import AuthorCard from '../components/AuthorCard';
import Layout from '../components/layout';
import SEO from '../components/seo';
import GlobalStyles from '../styles/Global.module.scss';
import Styles from './BlogPost.module.scss';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <section className={Styles.container}>
          <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
            <h1 className={Styles.title}>{post.frontmatter.title}</h1>
            <p className={Styles.meta}>
              By <a href="#author">{post.frontmatter.author.id}</a> on{' '}
              {post.frontmatter.date}
            </p>
            <img
              className={Styles.coverImage}
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
            />
            <div
              className={Styles.content}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <hr />
            <AuthorCard author={post.frontmatter.author} />

            <ul className={Styles.contentNav}>
              <li className={Styles.contentNavItem}>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        image
        date(formatString: "MMMM DD, YYYY")
        author {
          id
          bio
          twitter
          avatar
        }
      }
    }
  }
`;

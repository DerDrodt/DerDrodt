import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import { rhythm } from '../utils/typography';
import Badge from '../components/Badge/Badge';

export default class extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const topic = this.props.pageContext.topic;
    const siteDescription = `All my posts about ${topic}!`;
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${topic} | ${siteTitle}`}
        />
        <h1>{topic}</h1>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>
                <Badge>{topic}</Badge>
                {node.frontmatter.date} • {node.timeToRead} min read
              </small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostsByTopic($topic: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { topic: { eq: $topic } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
          }
        }
      }
    }
  }
`;

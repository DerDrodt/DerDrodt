import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import kebabcase from 'lodash.kebabcase';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import { rhythm, scale } from '../utils/typography';
import './blog.scss';
import Badge from '../components/Badge/Badge';

const GITHUB_USERNAME = 'DerDrodt';
const GITHUB_REPO_NAME = 'DerDrodt';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = post.excerpt;
    const {
      previous,
      next,
      slug,
      topic,
      previousInTopic,
      nextInTopic,
    } = this.props.pageContext;

    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content/${slug.substring(
      0,
      slug.length - 1,
    )}.md`;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}>
          <Link
            style={{ boxShadow: 'none' }}
            to={`/topic/${kebabcase(post.frontmatter.topic.toLowerCase())}`}>
            <Badge>{post.frontmatter.topic}</Badge>
          </Link>
          {post.frontmatter.date} • {post.timeToRead} min read
        </p>
        {previousInTopic && (
          <p>
            <Link to={previousInTopic.fields.slug}>My previous post in </Link>
            <Link
              style={{ boxShadow: 'none' }}
              to={`/topic/${kebabcase(post.frontmatter.topic.toLowerCase())}`}>
              <Badge>{topic}</Badge>
            </Link>
          </p>
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {nextInTopic && (
          <p>
            <Link to={nextInTopic.fields.slug}>
              My next post in <Badge>{topic}</Badge>
            </Link>
          </p>
        )}
        <hr style={{ marginBottom: rhythm(1) }} />

        <p>
          <a href={editUrl} target="_blank" rel="noopener noreferrer">
            Edit on GitHub
          </a>
        </p>
        <hr style={{ marginBottom: rhythm(1) }} />

        <Bio />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}>
          <li>
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
      excerpt
      html
      timeToRead
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        title
        topic
      }
    }
  }
`;

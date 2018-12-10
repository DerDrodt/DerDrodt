import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import kebabcase from 'lodash.kebabcase';

import Layout from '../components/Layout';
import { rhythm } from '../utils/typography';
import WIP from '../components/WIP';

export default class extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = 'All my post topics';

    const posts = this.props.data.allMarkdownRemark.edges;

    const topics = new Set();

    for (const p of posts) topics.add(p.node.frontmatter.topic);

    const topicsArr = [];

    topics.forEach((t) => topicsArr.push(t));

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Topics | ${siteTitle}`}
        />
        <h1>Topics</h1>
        <WIP />
        {topicsArr.map((topic) => (
          <div key={topic}>
            <h3 style={{ marginBottom: rhythm(1 / 4) }}>
              <Link
                style={{ boxShadow: 'none' }}
                to={`/topic/${kebabcase(topic.toLowerCase())}`}>
                {topic}
              </Link>
            </h3>
          </div>
        ))}
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            topic
          }
        }
      }
    }
  }
`;

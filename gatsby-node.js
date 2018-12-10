const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const kebabCase = require('lodash.kebabcase');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    const topicTheme = path.resolve('./src/templates/topic.js');

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    topic
                  }
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;
        const postsByTopic = {};

        const topics = new Set();
        for (const post of posts) {
          if ('topic' in post.node.frontmatter) {
            const topic = post.node.frontmatter.topic;
            if (!topics.has(topic)) postsByTopic[topic] = [];

            topics.add(topic);
            postsByTopic[topic].push(post);
          }
        }

        const getTopicIndex = (slug, topic) => {
          const posts = postsByTopic[topic];

          for (let i = 0; i < posts.length; i++) {
            if (posts[i].node.fields.slug === slug) return i;
          }
        };

        posts.forEach((post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          const topic = post.node.frontmatter.topic;
          const topicPosts = postsByTopic[topic];
          const topicIndex = getTopicIndex(post.node.fields.slug, topic);
          const previousInTopic =
            topicIndex === topicPosts.length - 1
              ? null
              : topicPosts[topicIndex + 1].node;
          const nextInTopic =
            topicIndex === 0 ? null : topicPosts[topicIndex - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              topic,
              previous,
              next,
              previousInTopic,
              nextInTopic,
            },
          });
        });

        topics.forEach((topic) => {
          createPage({
            path: `/topic/${kebabCase(topic.toLowerCase())}/`,
            component: topicTheme,
            context: {
              topic: topic,
            },
          });
        });
      }),
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

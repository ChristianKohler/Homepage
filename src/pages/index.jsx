import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import { MainHeader, PostList } from "components";
import { Layout, Container } from "layouts";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 0;
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={"Christian Kohler"} />
      <Container type={"base"}>
        <MainHeader title="Chris Kohler">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          tenetur totam corrupti explicabo molestiae, vero dolores fuga
          inventore!
        </MainHeader>
        <PostWrapper>
          {edges.map(({ node }) => (
            <PostList
              key={node.id}
              cover={node.frontmatter.cover.childImageSharp.fluid}
              path={node.frontmatter.path}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          ))}
        </PostWrapper>
      </Container>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array
            })
          })
        }).isRequired
      )
    })
  })
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

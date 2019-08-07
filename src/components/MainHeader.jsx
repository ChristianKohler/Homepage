import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const Wrapper = styled.header`
  color: ${props => props.theme.colors.white.base};
  margin: 10rem 0;
`;

const Title = styled.h1``;

const Subtitle = styled.p`
  max-width: 550px;
  font-size: 1.5em;
  font-weight: 300;
`;

const MainHeader = ({ title, children }) => (
  <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{children}</Subtitle>
  </Wrapper>
);

export default MainHeader;

MainHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

MainHeader.defaultProps = {
  title: false,
  children: false
};

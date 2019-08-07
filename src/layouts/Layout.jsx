import React, { Fragment } from "react";
import { ThemeProvider } from "emotion-theming";
import { css, Global } from "@emotion/core";
import styled from '@emotion/styled';
import PropTypes from "prop-types";
import "typeface-open-sans";
import "typeface-candal";
import { SEO } from "components";
import { NavBar, Footer } from "layouts";
import theme from "../../config/theme";
import headroom from "../styles/headroom";
import { nasaBackgroundSVG } from "../styles/nasaBackground";

const gradient = `linear-gradient(to bottom,  ${theme.colors.background.dark} 0%, ${theme.colors.background.light} 100%)`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
            text-rendering: optimizeLegibility;
            overflow-x: hidden;
            box-sizing: border-box;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }

          body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${theme.colors.background.dark};
            background-image: ${nasaBackgroundSVG}, ${gradient};
            background-attachment: fixed;
          }
          a {
            color: ${theme.colors.link};
            transition: color 0.5s;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
            color: ${theme.colors.linkHover};
          }
          h1 {
            font-family: ${theme.fontFamily.heading};
            font-size: 4rem;
            font-weight: 700;
          }

          ${headroom}
        `}
      />
      <SEO />
      <NavBar />
      {children}
      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
};

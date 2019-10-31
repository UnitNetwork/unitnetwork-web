import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

/* Material-UI */
import {createMuiTheme, CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';

import Header from "../components/Header";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface HomeProps {
  data: {
    site: {
      siteMetadata: {
        title: string,
      },
    },
  };
}

const theme = createMuiTheme({
  palette: {
    type: "light", // Switching the dark mode on is a single property value change.
  },
});



const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.data.site.siteMetadata.title}</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Header/>
    </ThemeProvider>
  );
};

export default Home;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

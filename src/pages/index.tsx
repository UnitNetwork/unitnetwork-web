import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

import sphere from '../images/sphere.png'

/* Material-UI */
import { createMuiTheme, CssBaseline, Container } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/styles';

import Header from "../components/Header";


const theme = createMuiTheme({
  palette: {
    type: "light", // Switching the dark mode on is a single property value change.
  },
});

const useStyles = makeStyles({
  root: {
    height: 700,
    background: 'linear-gradient(70deg, rgb(26, 75, 173) 0%, rgb(26, 75, 173) 0%, rgb(41, 112, 255) 100%, rgb(41, 112, 255) 100%)',
  },
  sphere: {
    animation: '$spin 700s linear infinite',
  },
  '@keyframes spin': { 
    '100%': { 
       transform: 'rotate(-360deg)' 
    } 
  }
})

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Unit Network IO</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className={classes.root}>
        <Container>
          <Header />
        </Container>
        <img src={sphere} className={classes.sphere}/>
      </div>
    </ThemeProvider>
  );
};

export default Home;

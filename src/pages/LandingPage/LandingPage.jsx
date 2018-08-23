import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import 'assets/scss/material-kit-react.css'

// Sections for this page

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Button
          color="danger"
          size="lg"
          href="#"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-play" />Watch video
        </Button>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);

import React, { Component } from "react";
import classes from "./Footer.module.scss";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer className={classes.Footer}>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>
            <div className={classes.InitialBox}>
              <img className={classes.Initial} src={this.props.data.initialUrl} alt="tahsin's-initial" />
            </div>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

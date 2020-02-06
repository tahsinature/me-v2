import React, { Component } from "react";

class Nav extends Component {
  state = {
    currentlyActive: "Home",
    navItems: [
      { name: "Home", link: "#home" },
      { name: "About", link: "#about" },
      { name: "Resume", link: "#resume" }
      // { name: "Portfolio", link: "#portfolio" },
      // { name: "Testimonials", link: "#testimonials" },
      // { name: "Contact", link: "#contact" }
    ]
  };

  onClickHandler = name => {
    this.setState({ currentlyActive: name });
  };

  render() {
    return (
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          {this.state.navItems.map(item => (
            <li key={item.name} className={this.state.currentlyActive === item.name ? "current" : null} onClick={() => this.onClickHandler(item.name)}>
              <a className="smoothscroll" href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;

import React, { Component, Fragment } from "react";
import "./App.css";
import axios from "./axios";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import About from "./views/About/About";
import Resume from "./views/Resume/Resume";
// import Contact from "./views/Contact/Contact";
// import Testimonials from "./views/Testimonials/Testimonials";
// import Portfolio from "./views/Portfolio/Portfolio";

import AppLoader from "./components/AppLoader/AppLoader";

class App extends Component {
  state = {
    isAppLoading: true,
    resumeData: {}
  };
  componentDidMount() {
    setTimeout(() => {
      axios.get("/tempfetcheddata.json").then(response => {
        this.setState({ resumeData: response.data, isAppLoading: false });
      });
    }, 2000);
  }
  render() {
    const content = (
      <Fragment>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        {/* <Portfolio data={this.state.resumeData.portfolio} /> */}
        <Footer data={this.state.resumeData.main} />
        {/* <Testimonials data={this.state.resumeData.testimonials} /> */}
        {/* <Contact data={this.state.resumeData.main} /> */}
      </Fragment>
    );
    return <div className="App">{this.state.isAppLoading ? <AppLoader /> : content}</div>;
  }
}

export default App;

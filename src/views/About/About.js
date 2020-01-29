/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import classes from "./About.module.scss";

class About extends Component {
  render() {
    if (this.props.data) {
      var { name, bio, street, city, state, zip, phone, email, resumedownload: resumeDownload } = this.props.data;
      var profilepic = "images/" + this.props.data.image;
    }

    return (
      <section id="about">
        <div className="row">
          <div className={["three", "columns", classes["profile-pic-holder"]].join(" ")}>
            <img className={["profile-pic", classes["profile-pic"]].join(" ")} src={profilepic} alt="Tim Baker Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              {/* <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div> */}
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

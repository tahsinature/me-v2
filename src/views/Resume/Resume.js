import React, { Component } from "react";
import classes from "./Resume.module.scss";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      // var education = this.props.data.education.map(function(education) {
      //   return (
      //     <div key={education.school}>
      //       <h3>{education.school}</h3>
      //       <p className="info">
      //         {education.degree} <span>&bull;</span>
      //         <em className="date">{education.graduated}</em>
      //       </p>
      //       <p>{education.description}</p>
      //     </div>
      //   );
      // });
      var work = this.props.data.work.map(function(work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function(skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={[className, classes.BarExpand].join(" ")}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
      var tools = this.props.data.tools.map(tool => {
        return (
          <div className={classes.Tool} key={tool.name}>
            <div className={classes.ToolContent}>
              <img src={tool.logo} alt={`${tool.name}-logo`} />
              <p>{tool.name}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        {/* <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div> */}

        {/* ----------- Work ----------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        {/* ----------- Skill ----------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>

        {/* ----------- Tools ----------- */}
        <div className="row">
          <div className="three columns header-col">
            <h1>
              <span>Tools</span>
            </h1>
          </div>

          <div className={["nine", "columns", "main-col", classes.Tools].join(" ")}>{tools}</div>
        </div>
      </section>
    );
  }
}

export default Resume;

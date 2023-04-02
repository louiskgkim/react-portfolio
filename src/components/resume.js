// want to create a resume that displays as a pdf and downloadable
import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-large">Resume</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/louis-resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-large">Skills</p>
        <hr />
        <ul>
          <li>HTML, CSS, Javascript,</li>
          <li>Webpack, MVC, MySQL,</li>
          <li>jQuery, Git, Github Repo,</li>
          <li>Bootstrap, React,</li>
          <li>Express.js, Node.js</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;

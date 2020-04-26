import React from 'react';

const PersonalProjects = (props) => {
  return (
    <section className="f4 lh-copy">
      <h2 className="f2 avenir ttu tracked bb-l tc">Personal Projects</h2>
      <ul>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            sequelize-utility
          </a>
          : a sequelize-utility description.
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            One Screen Messenger
          </a>
          : a future app
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            grpc-logger
          </a>
          : a grpc-logger description.
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            vue-store
          </a>
          : a vue-store description.
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            epidemic-stat
          </a>
          : a epidemic-stat description.
        </li>
      </ul>
    </section>
  );
};

export default PersonalProjects;

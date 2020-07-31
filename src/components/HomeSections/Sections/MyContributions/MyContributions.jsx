import React from 'react';
import classes from './MyContributions.module.scss';

const PersonalProjects = props => {
  return (
    <section className={[classes.MyContributions, 'f4 lh-copy'].join(' ')}>
      <h2 className="f2 avenir ttu tracked bb-l tc">My Contributions</h2>
      <ul>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.npmjs.com/package/sequelize-utility">
            sequelize-utility
          </a>
          : I created a utility lib over Sequelize (a very very popular ORM for relational DB) to ease some of daily actions over databases.
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            One Screen Messenger
          </a>
          : This is an ongoing project. I will update as soon as it gets ready.
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.npmjs.com/package/grpc-logger">
            grpc-logger
          </a>
          : Getting log from gRPC call is quite tricky (specially without a framework). So I created this lib to abstract all those complexity.
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://vue-store-tahsin.firebaseapp.com/about">
            vue-store
          </a>
          : A fully featured marketplace where you can sell your used stuffs in a convenient way.
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            epidemic-stat
          </a>
          : At the initial stage of COVID-19 pandemic, it was little bit tough to see the stat of the pendemic. I created an Android & iOS app to observe the stat conveniently.
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            easyport
          </a>
          : During software development, lots of time we face issues related to processes and ports. I created this binary to eliminate those issues with ease.
        </li>
      </ul>
    </section>
  );
};

export default PersonalProjects;

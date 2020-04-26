import React from 'react';

import HomeSections from '../../components/HomeSections/HomeSections';

import classes from './Home.module.scss';

const Home = (props) => {
  return (
    <div className={classes.Home}>
      <header className="tc pv4 pv5-ns">
        <img src="https://avatars2.githubusercontent.com/u/41298152" className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar" />
        <h1 className="f5 f4-ns fw6 avenir">Mohammad Tahsin</h1>
        <h2 className="f6 ttu tracked">Software Developer</h2>
      </header>
      <HomeSections />
    </div>
  );
};

export default Home;

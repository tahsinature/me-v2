import React from 'react';
import moment from 'moment';

const FewWordsAboutMe = props => {
  return (
    <section className="f4 lh-copy">
      <h2 className="f2 avenir ttu tracked bb-l tc">Few words about myself</h2>
      <p style={{ textAlign: 'justify' }}>
        I'm a Jakarta based Software Engineer. A passionate and pragmatic programmer with {moment.duration(moment().diff(moment().set('year', 2018).startOf('year'))).humanize()} of professional
        experience, specializing in microservices & full-stack development using modern & robust technologies. Sometimes I work on things I find interesting, or things I think other people might find
        interesting. It’s nice when those things overlap.
      </p>
    </section>
  );
};

export default FewWordsAboutMe;

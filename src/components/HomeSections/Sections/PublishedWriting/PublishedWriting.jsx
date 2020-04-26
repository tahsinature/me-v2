import React from 'react';

const PublishedWriting = (props) => {
  return (
    <section className="f4 lh-copy">
      <h2 className="f2 avenir tracked ttu bb-l tc">Published Writing</h2>
      <ul>
        <li>
          sequelize-utility talk{' '}
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            Link will be added
          </a>
        </li>
        <li>
          Write about gRPC logger{' '}
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            Link will be added
          </a>
        </li>
        <li>
          Write about react native shake alternative{' '}
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            Link will be added
          </a>
        </li>
      </ul>
    </section>
  );
};

export default PublishedWriting;

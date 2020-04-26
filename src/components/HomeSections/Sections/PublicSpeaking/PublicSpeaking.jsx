import React from 'react';

const PublicSpeaking = (props) => {
  return (
    <section className="f4 lh-copy">
      <h2 className="f2 avenir tracked ttu bb-l tc">Public Speaking</h2>
      <ul>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://youtu.be/lfy_k2REw8A">
            Rocketing the Node.js Community Beyond the Edge
          </a>{' '}
          at{' '}
          <a className="fw6 green no-underline underline-hover" href="http://2016.empirenode.org/">
            EmpireNode
          </a>{' '}
          2016
        </li>
      </ul>
    </section>
  );
};

export default PublicSpeaking;

import React from 'react';

const ToolsIAmUsing = props => {
  return (
    <section className="f4 lh-copy">
      <h2 className="f2 avenir ttu tracked bb-l tc">Tools I'm using nowadays</h2>
      <ul>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            gRPC
          </a>
          : I like gRPC transport mechanism for request/response as non-persistent streaming protocol.
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            Socket.IO
          </a>
          : I am using Socket.IO for bi-directional communication for quite a long now.
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            FCM
          </a>
          : Using Firebase Cloud Messaging (FCM) since 2019, as it's powered by Google, feels pretty consistant and reliable.
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            Docker
          </a>
          : Everyday's tool. In fact if I create a new repo now, I put it on docker first.
        </li>
        {/* <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            Kubernetes
          </a>
          : It's basically for DevOps. But sometimes we as backend engineer, need to 
        </li> */}
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            Jest
          </a>
          : Previously I was using Jasmine for testing. Now using Jest for couple of years now.
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            Redux
          </a>
          : If I use React or React Native apps, redux will take place there for sure.
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            SonarQube
          </a>
          : I use Sonar to inspect my code quality, detect bugs, code smells and security vulnerabilities. Really helps when I work in a team.
        </li>
      </ul>
    </section>
  );
};

export default ToolsIAmUsing;

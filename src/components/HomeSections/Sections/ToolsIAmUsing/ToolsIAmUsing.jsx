import React from 'react';
import { useHistory } from 'react-router-dom';

const data = [
  {
    title: 'gRPC',
    description: 'I like gRPC transport mechanism for request/response as non-persistent streaming protocol.',
    image: 'https://s.appbrain.com/static/202003041452037/blob/sdk-logos/grpc.png',
    display: true,
  },
  {
    title: 'Socket.IO',
    description: 'I am using Socket.IO for bi-directional communication for quite a long now.',
    image: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fsocket-io-logo.svg?alt=media&token=8c692e6c-a53e-4054-b19c-6d99c5d1e643',
  },
  {
    title: 'FCM',
    description: `Using Firebase Cloud Messaging (FCM) since 2019, as it's powered by Google, feels pretty consistant and reliable.`,
    image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Ffirebase_logo.png?alt=media&token=c1230b32-e464-48f0-8d3f-b49fe600f71b`,
  },
  {
    title: 'Docker',
    description: `Everyday's tool. In fact if I create a new repo now, I put it on docker first.`,
    image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fdocker-logo.png?alt=media&token=531f83a7-ace5-4a31-b825-822dbc1aa6c5`,
    display: true,
  },
  // {
  //   title: 'Kubernetes',
  //   description: 'It's basically for DevOps. But sometimes we as backend engineer, need to ',
  //   image: "It's basically for DevOps. But sometimes we as backend engineer, need to ",
  // },
  {
    title: 'Jest',
    description: `Previously I was using Jasmine for testing. Now using Jest for couple of years now.`,
    image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fjest-logo.jpg?alt=media&token=a97a9453-7782-4a0f-bde4-915274ebbff9`,
    display: true,
  },
  {
    title: 'Redux',
    description: `If I use React or React Native apps, redux will take place there for sure.`,
    image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fredux-logo.png?alt=media&token=2868fad7-92b8-46d3-be0c-fa1b6039b1d1`,
  },
  {
    title: 'SonarQube',
    description: `I use Sonar to inspect my code quality, detect bugs, code smells and security vulnerabilities. Really helps when I work in a team.`,
    image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fsonarqube-logo.png?alt=media&token=c75b584c-77d4-4341-8c5b-71616300830d`,
    display: true,
  },
  {
    title: 'HashiCorp Vault',
    description: `It's a single source of truth to manage credentials. I use it for storing application API keys, passwords, certificates and other sensitive data.`,
    image: `https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fhashicorp-vault-logo.png?alt=media&token=950f4c59-a5b0-4eaf-8b1b-683c8889e4c4`,
    display: true,
  },
];

const ToolsIAmUsing = () => {
  const history = useHistory();

  return (
    <section className="f4 lh-copy">
      <h2 className="f2 avenir ttu tracked bb-l tc">Tools I'm using nowadays</h2>
      <ul>
        {data.map(
          ele =>
            ele.display && (
              <li key={ele.title}>
                <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
                  {ele.title}
                </a>
                : {ele.description}
              </li>
            ),
        )}
        <li>
          <a
            className="fw6 green no-underline underline-hover"
            href="/tools"
            onClick={e => {
              e.preventDefault();
              history.push('/list/tools', { data, listTitle: `List of tools I've been using` });
            }}>
            See All...
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ToolsIAmUsing;

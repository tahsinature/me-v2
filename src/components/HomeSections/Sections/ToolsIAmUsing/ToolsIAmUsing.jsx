import React from 'react';

const ToolsIAmUsing = (props) => {
  return (
    <section className="f4 lh-copy">
      <h2 className="f2 avenir ttu tracked bb-l tc">Tools I'm using nowadays</h2>
      <ul>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            gRPC
          </a>
          : a why i use grpc with protocol buffer
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            socket.io
          </a>
          : a why i use socket.io
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            Docker
          </a>
          : a why i use docker
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            Jest
          </a>
          : previously using Jesmine now jest
        </li>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://www.google.com/">
            Redux
          </a>
          : Redux for state management
        </li>
      </ul>
    </section>
  );
};

export default ToolsIAmUsing;

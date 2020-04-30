import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import GotoChatButton from '../../../Buttons/GotoChatButton/GotoChatButton';
import NpxTahsin from '../../../../components/NpxTahsin/NpxTahsin';
import Toy from '../../../../components/Fun/GravityPoints/GravityPoints';

const FindMeElseWhere = props => {
  return (
    <section className="f4 lh-copy">
      <h2 className="f2 avenir tracked ttu bb-l tc">Find Me Elsewhere</h2>
      <ul>
        <li>
          On Facebook:{' '}
          <a className="fw6 green no-underline underline-hover" href="https://www.facebook.com/t4h51n">
            @t4h51n
          </a>
        </li>
        <li>
          On Twitter:{' '}
          <a className="fw6 green no-underline underline-hover" href="https://twitter.com/t4h51n">
            @t4h51n
          </a>
        </li>
        <li>
          On LinkedIn:{' '}
          <a className="fw6 green no-underline underline-hover" href="https://www.linkedin.com/in/t4h51n">
            @t4h51n
          </a>
        </li>
        <li>
          On Instagram:{' '}
          <a className="fw6 green no-underline underline-hover" href="https://www.instagram.com/t4h51n">
            @t4h51n
          </a>
        </li>
        <li>
          On Keybase:{' '}
          <a className="fw6 green no-underline underline-hover" href="https://keybase.io/t4h51n">
            @t4h51n
          </a>
        </li>
        <li>
          On npm:{' '}
          <a className="fw6 green no-underline underline-hover" href="https://www.npmjs.com/~tahsin">
            @tahsin
          </a>
        </li>
        <li>
          On PyPI:{' '}
          <a className="fw6 green no-underline underline-hover" href="https://pypi.org/user/tahsinature">
            @tahsinature
          </a>
        </li>
        <li>
          On GitHub:{' '}
          <a className="fw6 green no-underline underline-hover" href="https://github.com/tahsinature">
            @tahsinature
          </a>
        </li>
        <li>
          On Medium:{' '}
          <a className="fw6 green no-underline underline-hover" href="https://medium.com/@tahsinature">
            @tahsinature
          </a>
        </li>
        <li style={{display: 'flex', alignItems: 'center'}}>
          Or, let's do a live chat: <GotoChatButton />
        </li>
      </ul>
      <ScrollAnimation animateIn="fadeIn">
        <NpxTahsin />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Toy />
      </ScrollAnimation>
    </section>
  );
};

export default FindMeElseWhere;

import React, { useEffect, useState } from 'react';
import { MessageList, Input, Button } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import _ from 'lodash';

import './Chat.scss';

import classes from './Chat.module.scss';
import { Root, GlobalStyle } from './Chat.theme';
import faker from 'faker';

const Chat = props => {
  const [msgs, addNewMsg] = useState(
    Array.from({ length: 50 }, () => {
      return {
        position: _.sample(['left', 'right']),
        type: 'text',
        text: faker.random.words(),
        date: Date.parse(faker.date.past()),
      };
    }),
  );

  useEffect(() => {
    const list = document.querySelector(`.${classes.Middle}`);
    const farFromBottom = list.scrollHeight - list.scrollTop - list.offsetHeight;
    if (farFromBottom < 500) list.scroll(0, list.scrollHeight);

    // setTimeout(() => {
    //   addNewMsg(
    //     msgs.concat({
    //       position: _.sample(['left', 'right']),
    //       type: 'text',
    //       text: 'new msg',
    //       date: Date.parse(faker.date.recent()),
    //     }),
    //   );
    // }, 2000);
  });
  return (
    <Root className={classes.Chat}>
      <GlobalStyle />
      <div className={classes.Container}>
        <div className={classes.Top}>
          <p>@tahsinature</p>
        </div>
        <div className={classes.Middle}>
          <MessageList lockable={true} dataSource={msgs} />
        </div>
        <div className={classes.Bottom}>
          <Input placeholder="Type here..." rightButtons={<Button color="white" backgroundColor="black" text="Send" />} />
        </div>
      </div>
    </Root>
  );
};

export default Chat;

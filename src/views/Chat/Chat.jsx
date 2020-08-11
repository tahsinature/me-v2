import React from 'react';
import { MessageBox, MessageList, Input, Button } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import _ from 'lodash';

import './Chat.scss';

import classes from './Chat.module.scss';
import { Root, GlobalStyle } from './Chat.theme';
import faker from 'faker';

const Chat = props => {
  return (
    <Root className={classes.Chat}>
      <GlobalStyle />
      <div className={classes.Container}>
        <div className={classes.Top}>
          <p>@tahsinature</p>
        </div>
        <div className={classes.Middle}>
          <MessageList
            className="message-list"
            lockable={true}
            toBottomHeight={'100%'}
            dataSource={Array.from({ length: 50 }, () => {
              return {
                position: _.sample(['left', 'right']),
                type: 'text',
                text: faker.random.words(),
                date: Date.parse(faker.date.past()),
              };
            })}
          />
        </div>
        <div className={classes.Bottom}>
          <Input placeholder="Type here..." rightButtons={<Button color="white" backgroundColor="black" text="Send" />} />
        </div>
      </div>
    </Root>
  );
};

export default Chat;

import React, { useEffect } from 'react';

// RCE CSS
import 'react-chat-elements/dist/main.css';
// MessageBox component
import { MessageBox, MessageList } from 'react-chat-elements';
import _ from 'lodash';

import './Chat.scss';

import classes from './Chat.module.scss';
import appClasses from '../../App.module.scss';
import Conversation from './Conversation/Conversation';
import { Root, Header } from './Chat.theme';
import faker from 'faker';

// const getOnLineStatusComponent = isOnline => {
//   return (
//     <div className={classes.OnlineStatusBox}>
//       <p className={[classes.OnlineStatusText, classes[isOnline ? 'OnlineStatusText-online' : 'OnlineStatusText-offline']].join(' ')}>{isOnline ? 'Online' : 'Offline'}</p>
//       {!isOnline ? <p className={classes.OnlineStatusTextHelp}>Don't worry. As soon as you give me message, I will be here. I promise.</p> : null}
//     </div>
//   );
// };

const Chat = props => {
  useEffect(() => {
    console.log(appClasses);

    // const container = document.querySelector();
    // setInterval(() => {
    //   ps.top`
    // }, 2000);
    // ps.update();
  });

  return (
    <Root className={classes.Chat}>
      <div>
        <div style={{ padding: '1rem', backgroundColor: 'yellow' }}>
          {Array(50)
            .fill(faker.random.words(5))
            .map(word => (
              <p>{word}</p>
            ))}
        </div>
        {/* <MessageList
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
        /> */}
      </div>
      {/* <Header className={classes.RecieverHeader}>
        <h4>Mohammad Tahsin</h4>
        {getOnLineStatusComponent()}
        <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png" alt="receiver" className={[classes.AvatarTahsin, 'br-100 pa1 ba b--black-10'].join(' ')} />
      </Header>
      <div className={classes.ConversationContainer}>
        <Conversation />
      </div> */}
    </Root>
  );
};

export default Chat;

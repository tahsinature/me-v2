import React from 'react';
import styled from 'styled-components';

import classes from './Chat.module.scss';
import Conversation from './Conversation/Conversation';

import colors from '../../constants/colors';

const getOnLineStatusComponent = isOnline => {
  return (
    <div className={classes.OnlineStatusBox}>
      <p className={[classes.OnlineStatusText, classes[isOnline ? 'OnlineStatusText-online' : 'OnlineStatusText-offline']].join(' ')}>{isOnline ? 'Online' : 'Offline'}</p>
      {!isOnline ? <p className={classes.OnlineStatusTextHelp}>Don't worry. As soon as you give me message, I will be here. I promise.</p> : null}
    </div>
  );
};

const Root = styled.div`
  border-color: ${props => colors.theme[props.theme.mode].CHAT_border_color};
`;

const Header = styled.div`
  background-color: ${props => colors.theme[props.theme.mode].CHAT_header__backgroundColor};
  color: ${props => colors.theme[props.theme.mode].CHAT_header__textColor};
`;

const Chat = props => {
  return (
    <Root className={classes.Chat}>
      <Header className={classes.RecieverHeader}>
        <h4>Mohammad Tahsin</h4>
        {getOnLineStatusComponent()}
        <img src="https://i.picsum.photos/id/2/536/355.jpg" alt="receiver" className={[classes.AvatarTahsin, 'br-100 pa1 ba b--black-10'].join(' ')} />
      </Header>
      <div className={classes.ConversationContainer}>
        <Conversation />
      </div>
    </Root>
  );
};

export default Chat;

import React, { createRef, useEffect } from 'react';
import SendIcon from '@material-ui/icons/Send';

import classes from './Conversation.module.scss';
import Message from './Message/Message';
import { Root, ChatHistory, TextArea } from './Conversation.theme';

// import colors from '../../../constants/colors';

const conv = [
  {
    id: Math.random(),
    text: 'hi, ',
    senderName: 'other-mongo-id',
    createdAt: new Date('Sun Mar 18 2020 19:52:33 GMT+0700 (Western Indonesia Time)'),
    updatedAt: new Date(),
  },
  {
    id: Math.random(),
    text: 'hi, this is varonica',
    senderName: 'other-mongo-id',
    createdAt: new Date('Sun Apr 18 2020 19:52:33 GMT+0700 (Western Indonesia Time)'),
    updatedAt: new Date(),
  },
  {
    id: Math.random(),
    text: 'hi, this is tahsin',
    senderName: 'tahsin-mongo-id',
    createdAt: new Date('Sun Apr 19 2020 23:52:33 GMT+0700 (Western Indonesia Time)'),
    updatedAt: new Date(),
  },
  {
    id: Math.random(),
    text: 'how is it going',
    senderName: 'tahsin-mongo-id',
    createdAt: new Date('Sun Apr 29 2020 23:52:33 GMT+0700 (Western Indonesia Time)'),
    updatedAt: new Date(),
  },
  {
    id: Math.random(),
    text: 'how is it going',
    senderName: 'tahsin-mongo-id',
    createdAt: new Date('Sun Apr 29 2020 23:52:33 GMT+0700 (Western Indonesia Time)'),
    updatedAt: new Date(),
  },
  {
    id: Math.random(),
    text: 'how is it going',
    senderName: 'tahsin-mongo-id',
    createdAt: new Date('Sun Apr 29 2020 23:52:33 GMT+0700 (Western Indonesia Time)'),
    updatedAt: new Date(),
  },
  {
    id: Math.random(),
    text: 'how is it going',
    senderName: 'tahsin-mongo-id',
    createdAt: new Date('Sun Apr 29 2020 23:52:33 GMT+0700 (Western Indonesia Time)'),
    updatedAt: new Date(),
  },
  {
    id: Math.random(),
    text: 'how is it going',
    senderName: 'tahsin-mongo-id',
    createdAt: new Date('Sun Apr 29 2020 23:52:33 GMT+0700 (Western Indonesia Time)'),
    updatedAt: new Date(),
  },
  {
    id: Math.random(),
    text: 'how is it going',
    senderName: 'tahsin-mongo-id',
    createdAt: new Date('Sun Apr 29 2020 23:52:33 GMT+0700 (Western Indonesia Time)'),
    updatedAt: new Date(),
  },
  {
    id: Math.random(),
    text: 'how is it going',
    senderName: 'tahsin-mongo-id',
    createdAt: new Date('Sun Apr 29 2020 23:52:33 GMT+0700 (Western Indonesia Time)'),
    updatedAt: new Date(),
  },
  {
    id: Math.random(),
    text: 'how is it going',
    senderName: 'tahsin-mongo-id',
    createdAt: new Date('Sun Apr 29 2020 23:52:33 GMT+0700 (Western Indonesia Time)'),
    updatedAt: new Date(),
  },
  {
    id: Math.random(),
    text: 'how is it going 2',
    senderName: 'tahsin-mongo-id',
    createdAt: new Date('Sun Apr 29 2020 23:52:33 GMT+0700 (Western Indonesia Time)'),
    updatedAt: new Date(),
  },
];

const Conversation = props => {
  const ulContainer = createRef();
  useEffect(() => {
    ulContainer.current.scroll(0, ulContainer.current.scrollHeight);
  });

  return (
    <Root className={classes.Conversation}>
      <ChatHistory ref={ulContainer} className={classes['chat-history']}>
        <ul className={classes.MessageHolder}>
          {conv.map(msg => (
            <Message msg={msg} key={msg.id} />
          ))}
          {/* <Message />
          <li className={'clearfix'}>
            <i className={['fa', 'fa-circle', classes['online']].join(' ')}></i>
            <i className={['fa', 'fa-circle', classes['online']].join(' ')} style={{color: '#AED2A6'}}></i>
            <i className={['fa', 'fa-circle', classes['online']].join(' ')} style={{color: '#DAE9DA'}}></i>
          </li>{' '}
          */}
        </ul>
      </ChatHistory>

      <div className={[classes['chat-message'], classes['Clearfix']].join(' ')}>
        <TextArea name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></TextArea>
        <i className={['fa', 'fa-file-o', classes.UploadFileIcon].join(' ')}></i> &nbsp;&nbsp;&nbsp;
        <i className={['fa', 'fa-file-image-o', classes.UploadImageIcon].join(' ')}></i>
        <button>
          <SendIcon />
        </button>
      </div>
    </Root>
  );
};

export default Conversation;

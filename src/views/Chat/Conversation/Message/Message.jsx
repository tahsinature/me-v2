import React from 'react';
import moment from 'moment-timezone';

import classes from './Message.module.scss';

const getTahsinsMsg = (msg) => {
  return (
    <li className={'clearfix'}>
      <div className={classes['message-data']}>
        <span className={classes['message-data-name']}>
          <i className={['fa fa-circle', classes.OtherNameIndicator].join(' ')}></i> {msg.senderName}
        </span>
        <span className={classes['message-data-time']}>{moment(msg.createdAt).calendar()}</span>
      </div>
      <div className={[classes['message'], classes['other-message']].join(' ')}>{msg.text}</div>
    </li>
  );
};

const getVisitorsMsg = (msg) => {
  return (
    <li className={'clearfix'}>
      <div className={[classes['message-data'], classes['align-right']].join(' ')}>
        <span className={classes['message-data-time']}>{moment(msg.createdAt).calendar()}</span> &nbsp; &nbsp;
        <span className={classes['message-data-name']}>{msg.senderName}</span> <i className={[classes.MyNameIndicator, 'fa fa-circle'].join(' ')}></i> {/* class not nec */}
      </div>
      <div className={[classes['message'], classes['my-message'], classes['float-right']].join(' ')}>{msg.text}</div>
    </li>
  );
};

const Message = (props) => {
  const {msg} = props;

  return msg.senderName === 'tahsin-mongo-id' ? getTahsinsMsg(msg) : getVisitorsMsg(msg);
};

export default Message;

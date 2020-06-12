import React from 'react';
import IsMe from './IsMe';
import Others from './others';

const Inbox = ({isMe}) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Others />;
};

export default Inbox;

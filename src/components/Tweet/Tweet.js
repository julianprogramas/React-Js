import React from 'react';

import './tweet.css';

import Avatar from '../Avatar/Avatar';
import Card from '../Card/Card';

const Tweet = ({ username, title, name, image, content }) => {
  return (
    <Card>
      <Avatar src={image} />
      <p className="tweet-author">
        {username}: {name}
      </p>
      <p>
        <strong>{title}</strong>
      </p>
      <p>{content}</p>
    </Card>
  );
};

export default Tweet;

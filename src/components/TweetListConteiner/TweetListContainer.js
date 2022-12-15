import React from 'react';

import Tweet from '../Tweet/Tweet';
import './tweet-list.css';

import { tweets } from './tweets';

const TweetListContainer = () => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet
          content={tweet.content}
          image={tweet.image}
          name={tweet.name}
          title={tweet.title}
          username={tweet.username}
        />
      ))}
    </div>
  );
};

export default TweetListContainer;

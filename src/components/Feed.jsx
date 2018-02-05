import React from "react";
import NewTweet from "./NewTweet";
import TweetList from "./TweetList";

const feed = {
  width: '40%',
  backgroundColor: '#ccc',
  float: 'left'
}
function Feed(){
  return(
    <div style={feed}>
      <NewTweet/>
      <TweetList/>
    </div>
  );
}

export default Feed;

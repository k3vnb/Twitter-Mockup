import React from "react";
import Tweet from "./Tweet";

const tweetList = {
  height: '60vh',
  marginRight: 5
}

function TweetList(){
  return(
    <div style={tweetList}>
      <Tweet/>
      <Tweet/>
      <Tweet/>
    </div>
  );
}

export default TweetList;

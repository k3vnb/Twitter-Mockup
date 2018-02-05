import React from "react";
import TweetUserImage from "./TweetUserImage";
import TweetText from "./TweetText";

const tweet = {
  display: 'flex'
}

function Tweet(props){
  return(
    <div style={tweet}>
      <TweetUserImage/>
      <TweetText
        userName="Jarson South"
        tweetContent="I fought a bear today. Please pray for me. My blood is lost." />
    </div>
  );
}

export default Tweet;

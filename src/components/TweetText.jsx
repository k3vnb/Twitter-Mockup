import React from "react";

const tweetText = {
  marginLeft: 15
}
const h4 = {
  marginTop: 3,
  marginBottom: 5
}

function TweetText(props){
  return(
    <div style={tweetText}>
      <h4 style={h4}>{props.userName}</h4>
      <p>{props.tweetContent}</p>
    </div>
  );
}

export default TweetText;

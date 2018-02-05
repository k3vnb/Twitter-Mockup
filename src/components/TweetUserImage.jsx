import React from "react";

const image = {
  height: 50,
  width: 50,
  backgroundColor: "#aaa",
  marginTop: 5
}

function TweetUserImage(props){
  return(
    <img
      alt="user"
      style={image} />
  );
}

export default TweetUserImage;

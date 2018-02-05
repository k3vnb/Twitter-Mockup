import React from "react";
import wolf from "./../wolf.png";

const image = {
  height: 50,
  width: 50,
  backgroundColor: "#aaa",
  marginTop: 5
}

function TweetUserImage(props){
  return(
    <img
      src={wolf}
      alt="user"
      style={image} />
  );
}

export default TweetUserImage;

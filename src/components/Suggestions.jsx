import React from "React";
import TweetUserImage from "./TweetUserImage";

const suggestions = {
  display: "flex",
  padding: 10,
  height: 100,
  border: '1px solid grey'
}


function Suggestions(){
  return(
    <div style={suggestions}>
      <TweetUserImage/>
      <div>
        <h2>Lorem Ipsum</h2>
        <button>Hit me</button>
      </div>
    </div>
  );

}

export default Suggestions;

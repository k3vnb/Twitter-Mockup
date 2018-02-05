import React from "react";

const container = {
  width: "100%",
  height: 45
}

function NewTweet(){
  return(
    <div>
      <div className="maroonBox"></div>
      <input
        type="text"
        defaultValue="What's happening?"/>
    </div>
  );
}

export default NewTweet;

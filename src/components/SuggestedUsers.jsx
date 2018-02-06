import React from "react";
import Suggestions from "./Suggestions";

  const suggestedUsers = {
    boxSizing: 'border-box',
    marginLeft: 5
  }

function SuggestedUsers(){
  return(
    <div style={suggestedUsers}>
      <h4>Suggested</h4>
      <Suggestions/>
      <Suggestions/>
      <Suggestions/>
    </div>
  );
}

export default SuggestedUsers;

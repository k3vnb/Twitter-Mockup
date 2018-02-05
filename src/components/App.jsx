import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Feed from "./Feed";
import SuggestedUsers from "./SuggestedUsers";

function App(props){
  return (
    <div className="container">
      <Header/>
      <div className="body">
        <Profile/>
        <Feed/>
        <SuggestedUsers/>
      </div>
    </div>
  );
}

export default App;

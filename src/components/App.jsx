import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Feed from "./Feed";
import SuggestedUsers from "./SuggestedUsers";

const container = {
  maxWidth: 1200,
  height: '100vh',
  margin: 'auto'
}

function App(props){
  return (
    <div style={container}>
      <Header/>
      <hr/>
      <div className="body">
        <Profile/>
        <Feed/>
        <SuggestedUsers/>
      </div>
    </div>
  );
}

export default App;

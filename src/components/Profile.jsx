import React from "react";
import ProfileTop from "./ProfileTop";
import ProfileBottom from "./ProfileBottom";

const profile = {
  width: '30%',
  boxSizing: 'border-box',
  float: 'left',
  padding: 20
}
function Profile(){
  return(
    <div style={profile}>
      <ProfileTop />
      <ProfileBottom />
    </div>
  );
}

export default Profile;

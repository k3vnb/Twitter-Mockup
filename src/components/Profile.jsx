import React from "react";
import ProfileTop from "./ProfileTop";
import ProfileBottom from "./ProfileBottom";

const profile = {
  width: '30%',
  float: 'left'
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

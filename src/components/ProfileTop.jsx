import React from "react";
import ProfilePicture from "./ProfilePicture";
import Username from "./Username";
import ProfileNav from "./ProfileNav";

  const imgBlockStyles = {
    display: 'flex',
    justifyContent: 'space-around'
  }

function ProfileTop(){
  return(
    <div>
      <div style={imgBlockStyles}>
        <ProfilePicture />
        <Username />
      </div>
      <ProfileNav />
    </div>
  );
}

export default ProfileTop;

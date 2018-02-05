import React from "react";

  const profileNavStyles = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-between'  
  }

function ProfileNav(){
  return(
    <ul style={profileNavStyles}>
      <li>Tweets</li>
      <li>Following</li>
      <li>Fololowers</li>
    </ul>
  );
}

export default ProfileNav;

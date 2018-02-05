import React from "react";

  const picStyles = {
    border: '1px solid black',
    height: 70,
    width: 70,
    padding: '2%'
  }


function ProfilePicture(){
  return(
    <div style={picStyles}>
      <p>I AM A PICTURE</p>
    </div>
  );
}

export default ProfilePicture;

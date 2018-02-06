import React from "react";
import cow from "./../cow.png";

  const picStyles = {
    border: '1px solid black',
    height: 70,
    width: 70,
    padding: '2%',
  }
  const img = {
    width: '100%'
  }


function ProfilePicture(){
  return(
    <div style={picStyles}>
      <img style={img} src={cow}></img>
    </div>
  );
}

export default ProfilePicture;

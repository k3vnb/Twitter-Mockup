import React from "react";
import NavButton from "./NavButton";

  const listStyling = {
    display: 'flex',
    WebkitPaddingStart: 0,
    justifyContent: 'space-between',
    listStyle: 'none',
    height: '80%',
    margin: 0
  }

function Navbar() {
  return(
    <ul style={listStyling}>
      <NavButton
        name="Home"/>
      <NavButton
        name="Notifications"/>
      <NavButton
        name="Messages"/>
    </ul>
  )

}

export default Navbar

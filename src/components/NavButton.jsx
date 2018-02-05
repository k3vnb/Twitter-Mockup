import React from "react";

  const liStyles = {
    border: "1px solid gray"
  }
function NavButton(props) {
  return(
    <li style={liStyles}>{props.name}</li>
  )

}

export default NavButton

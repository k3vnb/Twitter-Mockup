import React from "react";
import Navbar from "./Navbar";
import SearchGroup from "./SearchGroup";

function Header(){

    var myStyledComponentStyles = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      fontFamily: 'sans-serif',
      height: 80
    }

  return(
    <div style={myStyledComponentStyles}>
      <Navbar />
      <SearchGroup />
    </div>
  );
}

export default Header;

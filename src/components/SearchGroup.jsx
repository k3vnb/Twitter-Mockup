import React from "react";
import SearchField from "./SearchField";
import RoundedButton from "./RoundedButton";

  const searchGroupStyles = {
    border: "1px solid gray",
    width: 350
  }

function SearchGroup(props) {
  return(
    <div style={searchGroupStyles}>
      <SearchField
        defaultText="Search"/>
      <RoundedButton
        text="Tweet"/>
    </div>
  )

}

export default SearchGroup

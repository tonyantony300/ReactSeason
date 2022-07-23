import React from "react";
import RandomShit from "./RandomShit";

const Spinner = props=> {

  return(
    <div className = "ui big active dimmer">
    <div className = "ui big text loader"> {props.message} <br/> <RandomShit large='Please wait until the location is fetched'/> </div>
   </div>

  );
}

Spinner.defaultProps = {
 message: 'Loading....'
}

export default Spinner;
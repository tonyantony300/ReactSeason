import React from "react";
import RandomShit from "./RandomShit";

const Spinner = props=> {

  return(
    <div class = "ui big active dimmer">
    <div class = "ui big text loader"> {props.message} <br/> <RandomShit large='cock'/> </div>
   </div>

  );
}

Spinner.defaultProps = {
 message: 'Loading....'
}

export default Spinner;
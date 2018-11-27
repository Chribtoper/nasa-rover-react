import React from 'react';
import { Image } from 'semantic-ui-react';

const Rover = (props) => {

  const style = {
    width: "10px",
    height: "10px",
    backgroundColor: "blue",
    border: "2px solid red"
  }

  const label = {
    fontSize: "5px",
    color: "yellow"
  }



  return(
    <div>
      <div style={label}>Sol 56</div>
      <div style={style}></div>
    </div>
  )
}

export default Rover;

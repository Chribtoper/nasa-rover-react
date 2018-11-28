import React from 'react';
import { Image } from 'semantic-ui-react';

const Rover = ({sol}) => {

  const style = {
    width: "10px",
    height: "10px",
    backgroundColor: "blue",
    border: "2px solid red"
  }

  const label = {
    position: "relative",
    display: "none",
    fontSize: "5px",
    color: "yellow"
  }


  return(
    <div className="rover">
      <div className="roverLabel" style={label}>Sol {sol}</div>
      <div style={style}></div>
    </div>
  )
}

export default Rover;

import React from 'react';
import { Image } from 'semantic-ui-react';

const Rover = ({ sol }) => {

  const style = {
    width: "10px",
    height: "10px",
    backgroundColor: "blue",
    border: "2px solid red"
  }

  // const pastStyle = {
  //   width: "15px",
  //   height: "15px",
  //   backgroundColor: "yellow",
  //   border: "2px solid red"
  // }


  return(
    <div style={style}></div>
  )
}

export default Rover;
// <div className="rover">
// </div>

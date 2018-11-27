import React, { Component } from 'react';
import Rover from '../components/Rover';

const Cell = ({location, cellWidth, cellHeight}) => {



  return(
    <div className="cell">
      {location != undefined ? <Rover  /> : null}
    </div>
  )
}

export default Cell

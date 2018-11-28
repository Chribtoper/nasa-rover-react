import React, { Component } from 'react';
import Rover from './Rover';

const Cell = ({location, selectedSol}) => {

  return(
    <div className="cell">
      {location ? <Rover sol={location.sol} /> : null}
    </div>
  )
}

export default Cell

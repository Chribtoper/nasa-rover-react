import React from 'react';
import { List, Segment } from 'semantic-ui-react'
import '../stylesheets/Info.css'

const Manifest = ({roverName, plannedSolDuration, leftEarth}) => {

  return(
    <Segment style={{textAlign: "left"}}>
      <h2 className="header">Manifest</h2>
      <p>Rover: {roverName}</p>
      <p>Total Planned Mission Sols: {plannedSolDuration}</p>
      <p>Left Earth On: {leftEarth}</p>
    </Segment>
  )
}

export default Manifest;

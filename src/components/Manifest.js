import React from 'react';
import { List, Segment } from 'semantic-ui-react'
import '../stylesheets/Info.css'

const Manifest = () => {

  return(
    <Segment style={{textAlign: "left"}}>
      <h2 className="header">Manifest</h2>
      <p>Rover: {"ROVER NAME PLEASE"}</p>
      <p>Total Planned Mission Sols: {"TOTAL MISSION DURATION PLEASE"}</p>
      <p>Left Earth On: {"LEFT EARTH DATE ON PLEASE"}</p>
    </Segment>
  )
}

export default Manifest;

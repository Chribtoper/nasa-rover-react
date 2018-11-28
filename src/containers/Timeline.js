import React, { Fragment } from 'react'
import { Button, Progress } from 'semantic-ui-react'
import { Slider } from 'react-semantic-ui-range'


const Timeline = ({selectedSol, selectSol, max}) => {

  return (
    <Slider color="red" inverted={false}
      settings={{
      start: selectedSol,
      min:0,
      max: max,
      step:1,
      onChange: (value) => {selectSol(value)}}}
   />
  )
}

export default Timeline;

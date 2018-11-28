import React from 'react';
import Manifest from '../components/Manifest';
import { List, Segment } from 'semantic-ui-react'
import Sol from '../components/Sol';
import NASA from '../components/NASA'
const Info = ({currentSol, manifest}) => {

  return(
    <Segment.Group>

      <Manifest
        roverName={manifest.roverName}
        plannedSolDuration={manifest.plannedSolDuration}
        manifest={manifest.leftEarth}
      />

      {currentSol ? <Sol currentSol={currentSol} /> : <NASA />}

    </Segment.Group>
  )
}

export default Info

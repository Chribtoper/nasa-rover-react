import React from 'react'
import Cell from './Cell'

const Row = ({y, cellCount}) => {

  const genCells = () => {
    let array = []
    for(let x = 1; x <= cellCount; x++){
      array.push(<Cell x={x} y={y} key={x} />)
    }
    return array
  }



  return(
    <div>
      {genCells()}
    </div>
  )
}

export default Row

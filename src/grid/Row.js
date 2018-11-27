import React, { Component } from 'react'
import Cell from './Cell'

class Row extends Component {


  genCells(){
    let array = []
    for(let x = 1; x <= this.props.cells; x++){
      let location = this.props.locations.find( coord => coord.position.x === x)
      // let node = this.props.nodes.find( node => node.Location.X == x)
      array.push(<Cell x={x} location={location} key={`cell-${x}`} />)
    }
    return array
  }


  render(){
    return(
      <div>
        {this.genCells(this.props.cells)}
      </div>
    )
  }
}

export default Row

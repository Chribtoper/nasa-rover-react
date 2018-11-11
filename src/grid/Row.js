import React, { Component } from 'react'
import Cell from './Cell'

class Row extends Component {


  // genCells(cells){
  //   let array = []
  //   for(let x = 1; x <= cells; x++){
  //     let bot = this.props.bots.find( bot => bot.Location.X == x)
  //     let node = this.props.nodes.find( node => node.Location.X == x)
  //
  //     array.push(<Cell x={x} className="cell" bot={bot} node={node} key={`cell-${x}`} /> )
  //   }
  //   return array
  // }


  render(){
    return(
      <div className="row">

      </div>
    )
  }
}

export default Row

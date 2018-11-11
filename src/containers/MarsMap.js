import React, { Component } from 'react'
import Row from '../grid/Row'
import { Image } from 'semantic-ui-react'

class Grid extends Component {
  state = {
    rowCount: 20,
    colCount: 20
  }


  // genRows(rows, cols){
  //   let array = []
  //
  //   for(let y = 1; y <= rows; y++){
  //     let bots = this.props.bots.filter( bot => bot.Location.Y == y )
  //     let nodes = this.props.nodes.filter( node => node.Location.Y == y)
  //     array.push(<Row y={y} bots={bots} nodes={nodes} cells={cols} key={`row-${y}`}/>)
  //   }
  //   return array
  // }

  render(){
    let { rowCount, colCount } = this.state
    return(
      <div className="grid">
        <Image src="https://i.imgur.com/vrwzkpy.png"/>
      </div>
    )
  }
}

export default Grid

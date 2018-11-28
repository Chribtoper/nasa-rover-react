import React, { Component } from 'react';
import '../stylesheets/Map.css';
import Row from '../components/Row';
import { Segment } from 'semantic-ui-react'

class Map extends Component {
  constructor(props){
    super(props)
    this.myInput = React.createRef()
    this.state = {
      rowCount: 0,
      colCount: 0,
    }
  }

  componentDidMount () {
    let compWidth = this.myInput.current.offsetWidth;
    let compHeight = this.myInput.current.offsetHeight;

    let colCount = Math.floor(compWidth/25)-1;
    let rowCount = Math.floor(compHeight/25)-1;

    this.setState({colCount, rowCount})
  }

  // genRows(){
  //   let array = []
  //
  //   for(let y = 1; y <= this.state.colCount; y++){
  //     let locations = this.props.logs.filter( coord => coord.position.y === y )
  //     array.push(<Row y={y} locations={locations} cells={this.state.rowCount} key={`row-${y}`}/>)
  //   }
  //   return array
  // }

  render(){
    return(
      <div ref={this.myInput}>
        <Segment id="map">
        {this.genRows()}
        </Segment>
      </div>
    )
  }
}

export default Map

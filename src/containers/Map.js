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
      cellCount: 0
    }
  }

  componentDidMount () {
    const compWidth = this.myInput.current.offsetWidth;
    const compHeight = this.myInput.current.offsetHeight;

    const rowCount = Math.floor(compWidth/25)-1;
    const cellCount = Math.floor(compHeight/25)-1;

    this.setState({cellCount, rowCount}, ()=>{console.log(cellCount, rowCount)})
  }

  genRows(){
    let array = []

    for(let y = 1; y <= this.state.rowCount; y++){
      array.push(<Row y={y} cellCount={this.state.cellCount} key={y}/>)
    }
    return array
  }

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

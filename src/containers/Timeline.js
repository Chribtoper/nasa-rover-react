import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'
import { Slider } from 'react-semantic-ui-range'


class Timeline extends Component {
  // state = {
  //   value: 0
  //  }

  // handleChange = (value) => {
  //   this.setState({value}, ()=>{console.log(this.state.value)})
  // }

  render() {
    return (
      <div>
        <Slider color="red" inverted={false}
          settings={{
          start: this.props.selectedSol,
          min:0,
          max: this.props.max,
          step:1,
          onChange: (value) => {this.props.selectSol(value)}}}
       />


      </div>
    )
  }
}

export default Timeline;

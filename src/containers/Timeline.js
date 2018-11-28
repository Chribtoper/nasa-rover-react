import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'
import { Slider } from 'react-semantic-ui-range'


class Timeline extends Component {
  state = {
    value: 0
  }

  // these values are just an example

  handleChange = (value) => {
    this.setState({value}, ()=>{console.log(this.state.value)})

  }

  render(){
    return (
      <Slider color="red" inverted={false}
      settings={{
        start: this.state.value,
        min:0,
        max: 100,
        step:1,
        onChange: (value) => {this.handleChange(value)}}}
        />
      )
  }
}

export default Timeline;

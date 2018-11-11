import React, { Component } from 'react';
import './stylesheets/App.css'
import NewCal from './containers/NewCal'
import MarsMap from './containers/MarsMap'
import ControlPanel from './containers/ControlPanel'
import { Grid } from 'semantic-ui-react'
import { fetchMissionUpdates } from './services/Adapter'

class App extends Component {


  componentDidMount(){
    fetchMissionUpdates()
  }


  render() {
    return (
      <div className="App">
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={13}>

              <MarsMap />

            </Grid.Column>
            <Grid.Column width={3}>

              <ControlPanel />

            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>

              <NewCal />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;

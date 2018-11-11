import React, { Component } from 'react';
import './stylesheets/App.css'
import Calendar from './containers/Calendar'
import MarsMap from './containers/MarsMap'
import ControlPanel from './containers/ControlPanel'
import { Grid } from 'semantic-ui-react'


class App extends Component {

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

              <Calendar />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;

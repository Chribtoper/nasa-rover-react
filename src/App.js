import React, { Component } from 'react';
import './stylesheets/App.css'
import Timeline from './containers/Timeline'
import Map from './containers/Map'
import Info from './containers/Info'
import { Grid } from 'semantic-ui-react'


class App extends Component {



  render() {
    return (
      <div className="App">
        <Grid celled>
          <Grid.Column width={13}>

            <Map />

            <Timeline />

          </Grid.Column>
          <Grid.Column width={3}>

            <Info />

          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;

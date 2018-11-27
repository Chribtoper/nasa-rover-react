import React, { Component } from 'react';
import './stylesheets/App.css'
import Timeline from './containers/Timeline'
import Map from './containers/Map'
import ControlPanel from './containers/ControlPanel'
import { Grid } from 'semantic-ui-react'
import { fetchManifest, fetchJourney } from './services/Adapter'

class App extends Component {
  state = {
    manifest: {},
    journey: [],
    selectedSol: 1
  }

  componentDidMount(){
    let manifest = fetchManifest();
    let journey = fetchJourney();

    Promise.all([manifest, journey])
      .then( ([manifest, journey]) => {
        this.setState({
          manifest,
          journey
        })
      })
  }

  selectSol = (selectedSol) => {
    this.setState({selectedSol},()=>{console.log(this.state.selectedSol)})
  }

  filterLocations = () => {
    return this.state.journey.filter( location => location.sol <= this.state.selectedSol )
  }


  render() {
    return (
      <div className="App">
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={13}>

              <Map journey={this.filterLocations()} />

            </Grid.Column>
            <Grid.Column width={3}>

              <ControlPanel />

            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>

              <Timeline
                selectSol={this.selectSol}
                selectedSol={this.state.selectedSol}
                max={this.state.manifest.plannedSolDuration}
              />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;

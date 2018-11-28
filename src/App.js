import React, { Component } from 'react';
import './stylesheets/App.css'
import Timeline from './containers/Timeline'
import Map from './containers/Map'
import Info from './containers/Info'
import { Grid } from 'semantic-ui-react'
import { fetchManifest, fetchLogs } from './services/Adapter'

class App extends Component {
  state = {
    manifest: {},
    logs: [],
    selectedSol: 1
  }

  componentDidMount(){
    let manifest = fetchManifest();
    let logs = fetchLogs();

    Promise.all([manifest, logs])
      .then( ([manifest, logs]) => {
        this.setState({
          manifest,
          logs
        })
      })
  }

  selectSol = (selectedSol) => {
    this.setState({selectedSol},()=>{console.log(this.state.selectedSol)})
  }

  filterLocations = () => {
    return this.state.logs.filter( location => location.sol <= this.state.selectedSol )
  }


  render() {
    return (
      <div className="App">
        <Grid celled>
          <Grid.Column width={13}>


            <Map logs={this.filterLocations()} />
            <Timeline
              selectSol={this.selectSol}
              selectedSol={this.state.selectedSol}
              max={this.state.manifest.plannedSolDuration}
            />

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

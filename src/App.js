import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardHeader, CardTitle } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

import './App.css';
import { SearchComponent } from './search/search.component';
import { DataStore } from './common/datastore';
import { DistrictDataComponent } from './district/district-data.component';

class App extends Component {

  state = {
    districtText: '',
    districts: [],
    spinner: false,
    activeData: [],
    age: 'All Ages',
    presentAges: []
  }

  constructor() {
    super();
    this.searchDistrict = this.searchDistrict.bind(this);
    this.onDistrictChange = this.onDistrictChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        DataStore.searchDataByLocation(position)
          .then((districtName) => {
            this.searchDataStore(districtName);
          });
      });
    }
  }

  searchDistrict(e) {
    const districts = this.state.districts;
    if (districts.length > 0 && districts[0].AreaName === `District - ${this.state.districtText}`) {
      return;
    }
    this.searchDataStore(this.state.districtText);
  }

  searchDataStore(districtName) {
    this.setState({
      districts: [],
      spinner: true
    });
    DataStore.searchDataByDistrict(districtName)
      .then((data) => {
        const presentAges = data.map((record) => record.PresentAge);
        const districts = data.filter((district) => district.PresentAge === this.state.age);
        this.setState({
          districtText: districtName,
          districts: [...districts],
          spinner: false,
          presentAges: presentAges
        });
      });
  }

  onDistrictChange(event) {
    const value = event.target.value;
    this.setState(Object.assign({}, this.state, { districtText: value }));
  }

  onAgeChange(event, index, value) {
    const districts = DataStore.getData().filter((district) => district.PresentAge === value);
    this.setState(Object.assign({}, this.state, { age: value, districts }));
  }

  render() {
    let districtEl = null;
    if (this.state.districts.length > 0) {
      districtEl = this.state.districts.map((district) => <DistrictDataComponent {...district} key={district.id}></DistrictDataComponent>);
    } else {
      districtEl =
        <Card style={{ 'margin': '0 8px' }}>
          <CardHeader
            title={this.state.districtText}
          />
          <CardTitle title='Data not found!' />
        </Card>;
    }
    return (
      <MuiThemeProvider>
        <Paper zDepth={1} style={{ 'display': 'flex', 'flexDirection': 'column', 'height': '100%' }}>
          <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
            <SearchComponent onSearchClick={this.searchDistrict} onTextChange={this.onDistrictChange}
              districtName={this.state.districtText} onAgeChange={this.onAgeChange}
              age={this.state.age} presentAges={this.state.presentAges}></SearchComponent>
            {this.state.spinner &&
              <div style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center' }}>
                <CircularProgress style={{ 'position': 'absolute', 'top': '50%', 'left': '50%' }} size={80} thickness={5} />
              </div>
            }
            {districtEl}
          </div>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import ActionHelp from 'material-ui/svg-icons/action/help';
import IconButton from 'material-ui/IconButton';

import './App.css';
import { SearchComponent } from './search/search.component';
import { DataStore } from './common/datastore';
import { DistrictListComponent } from './district/district-list.component';
import { AboutComponent } from './about/about.component';

class App extends Component {

  state = {
    districtText: '',
    districts: [],
    spinner: false,
    activeData: [],
    age: 'All Ages',
    presentAges: [],
    showDialog: false
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

  onDistrictChange(searchText) {
    searchText = searchText.charAt(0).toUpperCase() + searchText.substr(1);
    this.setState(Object.assign({}, this.state, { districtText: searchText }));
    this.searchDistrict();
  }

  onAgeChange(event, index, value) {
    const districts = DataStore.getData().filter((district) => district.PresentAge === value);
    this.setState(Object.assign({}, this.state, { age: value, districts }));
  }

  render() {
    return (
      <Paper zDepth={1} style={{ 'display': 'flex', 'flexDirection': 'column', 'flex': '1 0 auto' }}>
        {this.state.showDialog && 
          <AboutComponent 
            handleClose={() => {
              this.setState({
                showDialog: !this.state.showDialog
              })
            }}
          ></AboutComponent>}
        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
          <AppBar style={{ flex: '1 0 auto' }}
            iconElementLeft={<IconButton><ActionHelp /></IconButton>}
            title="Women Statistics in Maharashtra"
            onLeftIconButtonTouchTap={() => {
              this.setState({
                showDialog: !this.state.showDialog
              })
            }}
          />
          <SearchComponent onSearchClick={this.searchDistrict} onTextChange={this.onDistrictChange}
            districtName={this.state.districtText} onAgeChange={this.onAgeChange}
            age={this.state.age} presentAges={this.state.presentAges}
            ></SearchComponent>
          {this.state.spinner &&
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center' }}>
              <CircularProgress style={{ 'position': 'absolute', 'top': '50%', 'left': '50%' }} size={80} thickness={5} />
            </div>
          }
          <DistrictListComponent {...this.state}></DistrictListComponent>
        </div>
      </Paper>
    );
  }
}

export default App;

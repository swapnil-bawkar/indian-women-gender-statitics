import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

import './App.css';
import { SearchComponent } from './search/search.component';
import { DataStore } from './common/datastore';
import { DistrictDataComponent } from './district/district-data.component';

class App extends Component {

  state = {
    districtText: '',
    districts: [],
    spinner: false
  }

  constructor() {
    super();
    this.searchDistrict = this.searchDistrict.bind(this);
    this.onDistrictChange = this.onDistrictChange.bind(this);
  }

  searchDistrict(e) {
    const districts = this.state.districts;
    if (districts.length > 0 && districts[0].AreaName === `District - ${this.state.districtText}`) {
      return;
    }
    this.setState({
      districts: [],
      spinner: true
    });
    DataStore.searchDataByDistrict(this.state.districtText)
      .then((data) => {
        this.setState({
          districts: [...data]
        });
      });
  }

  onDistrictChange(event) {
    const value = event.target.value;
    if (!value) {
      return;
    }
    this.setState(Object.assign({}, this.state, { districtText: value }));
  }

  render() {
    const distictsEl = this.state.districts.length === 0 ? null : this.state.districts.map((district) => {
      return <DistrictDataComponent {...district} key={district.id}></DistrictDataComponent>;
    });
    return (
      <MuiThemeProvider >
        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
          <SearchComponent onSearchClick={this.searchDistrict} onTextChange={this.onDistrictChange}></SearchComponent>
          {this.state.spinner &&
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center' }}>
              <CircularProgress style={{ 'position': 'absolute', 'top': '50%' }} size={80} thickness={5} />
            </div>
          }
          {distictsEl}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

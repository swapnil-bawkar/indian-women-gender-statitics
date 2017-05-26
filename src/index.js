import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        fetch(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&sensor=true`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                const result = json.results.find(address => {
                    return address.types.indexOf('locality') > -1;
                });
                console.log(result.address_components[0]);
            });        
    });
}
  
function renderApp(json) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
renderApp();
registerServiceWorker();

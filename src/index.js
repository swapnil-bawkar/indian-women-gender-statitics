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

function renderApp(json) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
renderApp();
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './heartrate/App'
//import App from './fakerest/App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

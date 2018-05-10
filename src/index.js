import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './tutorial/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

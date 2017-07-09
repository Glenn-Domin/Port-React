import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/scss/bootstrap.scss';
//import './App.css';
//import './css/style.css';
import './scss/bootstrap.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

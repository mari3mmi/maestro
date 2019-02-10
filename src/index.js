import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Client from './components/client/Client.js';
import * as serviceWorker from './serviceWorker';
import * as TopicPublisher from './TopicPublisher.js';
import Master from './components/master/Master.js';

ReactDOM.render(<Master />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

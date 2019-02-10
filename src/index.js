import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import Home from './components/home/Home.js';
import Master from './components/master/Master.js';
import Client from './components/client/Client.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>            
            <Route exact path="/master" component={Master}/>
            <Route exact path="/client" component={Client}/>            
        </Switch>
    </div>
</Router>,  	

    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Badge from './components/Badge.js';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root')
ReactDOM.render(<Badge  
                    firstName="Son" 
                    lastName="Camilo"
                    powerFight = "1000/1500"
                    specialTrait = "Saiyan"
                    />, container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

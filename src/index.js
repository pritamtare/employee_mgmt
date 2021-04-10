import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/index.css';
import '../src/Components/Home/Home.css';
import '../src/Components/Display/Display.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery/dist/jquery.js";
import "popper.js/dist/popper.js"
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom"
    
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));
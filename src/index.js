import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavMenu from './components/NavMenu';
import Teams from './Teams';
import LeagueLeaders from './LeagueLeaders';

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
    <Router>
        <App />
    </Router>
    
);


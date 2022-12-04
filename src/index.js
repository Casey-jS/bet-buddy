import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import {BrowserRouter as Router} from 'react-router-dom'
import UserContext from './UserContext';

const root = ReactDOM.createRoot(document.getElementById('main'));


root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);


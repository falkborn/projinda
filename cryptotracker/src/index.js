import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';
import App from './App';
import 'antd/dist/antd.css' // behövs egentligen en css-fil

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
); 

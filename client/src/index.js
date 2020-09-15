import React from 'react';
import ReactDOM from 'react-dom';
//Browser Router more modern, it renames it as Router
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './index.css';
import App from './App';
// Then we wrap app in it so we can use react router anywhere in the app
// You'll need to wrap <App /> for routing to work
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

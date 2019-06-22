import React from 'react';
import {IndexRoute, Switch} from 'react-router'
import {Route, BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

import {UserPage} from './pages'

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <div className="container">
                <Router>
                <Route>
                    <Route path="/:id" component={UserPage}/>
                </Route>
                </Router>
            </div>
        </div>
    );
}

export default App;

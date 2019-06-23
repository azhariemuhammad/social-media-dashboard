import React from 'react';
import {IndexRoute, Switch} from 'react-router'
import {Route, BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

import {PhotosPage, PostDetailPage, UserPage} from './pages'

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <div className="container">
                <Router>
                    <Route>
                        <Switch>
                            <Route exact path="/:id" component={UserPage}/>
                            <Route path="/albums/:id" component={PhotosPage}/>
                            <Route path="/posts/:id" component={PostDetailPage}/>
                        </Switch>
                    </Route>
                </Router>
            </div>
        </div>
    );
}

export default App;

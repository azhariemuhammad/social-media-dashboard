import React from 'react';
import { Provider } from 'react-redux'
import {IndexRoute, Switch} from 'react-router'
import {Route, BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import 'semantic-ui-css/semantic.min.css'
import store from './store/configureStore'

import {PhotosPage, PostDetailPage, UserPage} from './pages'

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;


require('styles/App.css');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Common/App';
import List from './List';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

const browserHistory = useRouterHistory(createHistory)({
    basename: '/'
});


ReactDOM.render((
    <Router history={ browserHistory }>
        <Route component={App} >
            <Route path="/" component={List} />
        </Route>
    </Router>
    ), document.getElementById('app'));

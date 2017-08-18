// Standard Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// React Router Imports
    import {Router, Route, browserHistory, IndexRoute} from 'react-router';
    import Main from './Main';
    import Documents from './Documents'
    import Login from './Login'
//



//React Render and Routing
ReactDOM.render(

        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Main} />
                <Route path="main" component={Main} />
                <Route path="documents" component={Documents} />
                <Route path="login" component={Login} />
            </Route>
        </Router>

    , document.getElementById('root'));

registerServiceWorker();

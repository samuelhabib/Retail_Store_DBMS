import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Register from './components/Register/Register';

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Login} />
            <Route path="/Main" exact component={Main} />
            <Route path="/Register" exact component={Register} />
        </Router>
    );
};

export default App;
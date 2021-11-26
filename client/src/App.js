import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Login} />
            <Route path="/Registration" exact component={Register} />
            <Route path="/Main" exact component={Main} />
            <Route path="/Products" exact component={Products} />
            <Route path="/Cart" exact component={Cart} />
            <Route path="/Orders" exact component={Orders} />
        </Router>
    );
};

export default App;
import React from 'react';
import { Router, Route  } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './_helpers';
import { PrivateRoute } from './_components';

import { Home, LoginPage, RegisterPage, AboutUs, ContactUs, ProductDetailView} from './_pages';

class App extends React.Component {
    render() {        
        return (
            
                        <Router history={history}>
                        
                            <div>
                                <PrivateRoute exact path="/" component={Home} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/about" component={AboutUs} />
                                <Route path="/contact" component={ContactUs} />
                                <Route path="/product/detail/:id" component={ProductDetailView} />
                            </div>
                            
                        </Router>
                   
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
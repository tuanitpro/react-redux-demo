import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';

import { Home, LoginPage, RegisterPage, AboutUs, ContactUs} from './_pages';

class LoginLayout extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        { alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                        <Switch>
                            <div>
                                <PrivateRoute exact path="/" component={Home} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/about" component={AboutUs} />
                                <Route path="/contact" component={ContactUs} />
                            </div>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedLoginLayout = connect(mapStateToProps)(LoginLayout);
export { connectedLoginLayout as LoginLayout }; 
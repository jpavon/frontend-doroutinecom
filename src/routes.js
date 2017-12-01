import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from 'pages/Home'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Routines from 'pages/Routines'
import Routine from 'pages/Routine'
import NoMatch from 'pages/NoMatch'

class Routes extends Component {

    static propTypes = {
        store: PropTypes.object.isRequired,
    }

    getRoutes = () => {

        const isAuth = localStorage.getItem('token')

        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                isAuth ?
                    <Component {...props} /> :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
            )} />
        )

        const GuestRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                !isAuth ?
                    <Component {...props} /> :
                    <Redirect to='/' />
            )} />
        )

        return (
            <Switch>
                <GuestRoute exact path="/login" component={Login} />
                <GuestRoute exact path="/register" component={Register} />

                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/routines" component={Routines} />
                <PrivateRoute exact path="/r/:routineSlug" component={Routine} />

                <PrivateRoute component={NoMatch}/>
            </Switch>
        )
    }

    render() {
        return (
            <Provider store={this.props.store}>
                {this.getRoutes()}
            </Provider>
        )
    }
}

export default Routes

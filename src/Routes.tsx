import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import Login from 'pages/Auth/Login'
import Register from 'pages/Auth/Register'
import PasswordForgotten from 'pages/Auth/PasswordForgotten'
import PasswordReset from 'pages/Auth/PasswordReset'
import Routines from 'pages/Routines'
import Routine from 'pages/Routine'
import Workout from 'pages/Workout'
import Workouts from 'pages/Workouts'
import Lift from 'pages/Lift'
import Lifts from 'pages/Lifts'
import Profile from 'pages/Profile'
import Settings from 'pages/Settings'
import NotFound from 'pages/NotFound'

interface IProps {
    isAuth: boolean
}

interface IRouteComponent {
    exact?: boolean
    path?: string
    component: React.SFC<RouteComponentProps<{}>>
}

class Routes extends React.Component<IProps> {

    render() {
        const PrivateRoute = ({ component: Component, ...rest }: IRouteComponent) => (
            <Route
                render={(props) => (
                    this.props.isAuth ?
                        <Component {...props} /> :
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location.pathname }
                            }}
                        />
                )}
                {...rest}
            />
        )

        const GuestRoute = ({ component: Component, ...rest }: IRouteComponent) => (
            <Route
                render={(props) => (
                    !this.props.isAuth ?
                        <Component {...props} /> :
                        <Redirect
                            to={
                                (props.location.state && props.location.state.from) ?
                                props.location.state.from :
                                '/'
                            }
                        />
                )}
                {...rest}
            />
        )

        return (
            <Switch>
                <GuestRoute exact path="/login" component={Login} />
                <GuestRoute exact path="/register" component={Register} />
                <GuestRoute exact path="/password-forgotten" component={PasswordForgotten} />
                <GuestRoute exact path="/password-reset/:token" component={PasswordReset} />

                <PrivateRoute exact path="/" component={Profile} />
                <PrivateRoute exact path="/settings" component={Settings} />
                <PrivateRoute exact path="/workouts" component={Workouts} />
                <PrivateRoute exact path="/workouts/:workoutId" component={Workout} />
                <PrivateRoute exact path="/routines" component={Routines} />
                <PrivateRoute exact path="/routines/:routineId" component={Routine} />
                <PrivateRoute exact path="/lifts" component={Lifts} />
                <PrivateRoute exact path="/lifts/:liftId" component={Lift} />

                <Route component={NotFound}/>
            </Switch>
        )
    }
}

export default Routes

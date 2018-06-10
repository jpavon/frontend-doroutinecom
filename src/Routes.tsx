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

const PrivateRoute = ({
    component: Component,
    isAuth,
    ...rest
}: IRouteComponent & IProps) => (
    <Route
        render={(props) =>
            isAuth ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location.pathname }
                    }}
                />
            )
        }
        {...rest}
    />
)

const GuestRoute = ({
    component: Component,
    isAuth,
    ...rest
}: IRouteComponent & IProps) => (
    <Route
        render={(props) =>
            !isAuth ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={
                        props.location.state && props.location.state.from
                            ? props.location.state.from
                            : '/'
                    }
                />
            )
        }
        {...rest}
    />
)

class Routes extends React.Component<IProps> {
    public render() {
        return (
            <Switch>
                <GuestRoute
                    exact={true}
                    path="/login"
                    component={Login}
                    isAuth={this.props.isAuth}
                />
                <GuestRoute
                    exact={true}
                    path="/register"
                    component={Register}
                    isAuth={this.props.isAuth}
                />
                <GuestRoute
                    exact={true}
                    path="/password-forgotten"
                    component={PasswordForgotten}
                    isAuth={this.props.isAuth}
                />
                <GuestRoute
                    exact={true}
                    path="/password-reset/:token"
                    component={PasswordReset}
                    isAuth={this.props.isAuth}
                />

                <PrivateRoute
                    exact={true}
                    path="/"
                    component={Profile}
                    isAuth={this.props.isAuth}
                />
                <PrivateRoute
                    exact={true}
                    path="/settings"
                    component={Settings}
                    isAuth={this.props.isAuth}
                />
                <PrivateRoute
                    exact={true}
                    path="/workouts"
                    component={Workouts}
                    isAuth={this.props.isAuth}
                />
                <PrivateRoute
                    exact={true}
                    path="/workouts/:workoutId"
                    component={Workout}
                    isAuth={this.props.isAuth}
                />
                <PrivateRoute
                    exact={true}
                    path="/routines"
                    component={Routines}
                    isAuth={this.props.isAuth}
                />
                <PrivateRoute
                    exact={true}
                    path="/routines/:routineId"
                    component={Routine}
                    isAuth={this.props.isAuth}
                />
                <PrivateRoute
                    exact={true}
                    path="/lifts"
                    component={Lifts}
                    isAuth={this.props.isAuth}
                />
                <PrivateRoute
                    exact={true}
                    path="/lifts/:liftId"
                    component={Lift}
                    isAuth={this.props.isAuth}
                />

                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Routes

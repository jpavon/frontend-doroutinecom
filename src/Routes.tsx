import * as React from 'react'
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom'

import Login from 'views/auth/Login'
import Register from 'views/auth/Register'
import PasswordForgotten from 'views/auth/PasswordForgotten'
import PasswordReset from 'views/auth/PasswordReset'
import Routines from 'views/Routines'
import Routine from 'views/Routine'
import Workout from 'views/Workout'
import Workouts from 'views/Workouts'
import Lift from 'views/Lift'
import Lifts from 'views/Lifts'
import Profile from 'views/Profile'
import Settings from 'views/Settings'
import NotFound from 'views/NotFound'

interface Props {
    isAuth: boolean
}

interface RouteProps {
    exact?: boolean
    path?: string
    component: React.SFC<RouteComponentProps<{}>>
}

const PrivateRoute = ({
    component: Component,
    isAuth,
    ...rest
}: RouteProps & Props) => (
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
}: RouteProps & Props) => (
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

const Routes: React.SFC<Props> = (props) => (
    <Switch>
        <GuestRoute exact={true} path="/login" component={Login} {...props} />
        <GuestRoute
            exact={true}
            path="/register"
            component={Register}
            {...props}
        />
        <GuestRoute
            exact={true}
            path="/password-forgotten"
            component={PasswordForgotten}
            {...props}
        />
        <GuestRoute
            exact={true}
            path="/password-reset/:token"
            component={PasswordReset}
            {...props}
        />

        <PrivateRoute exact={true} path="/" component={Profile} {...props} />
        <PrivateRoute
            exact={true}
            path="/settings"
            component={Settings}
            {...props}
        />
        <PrivateRoute
            exact={true}
            path="/workouts"
            component={Workouts}
            {...props}
        />
        <PrivateRoute
            exact={true}
            path="/workouts/:workoutId"
            component={Workout}
            {...props}
        />
        <PrivateRoute
            exact={true}
            path="/routines"
            component={Routines}
            {...props}
        />
        <PrivateRoute
            exact={true}
            path="/routines/:routineId"
            component={Routine}
            {...props}
        />
        <PrivateRoute exact={true} path="/lifts" component={Lifts} {...props} />
        <PrivateRoute
            exact={true}
            path="/lifts/:liftId"
            component={Lift}
            {...props}
        />

        <Route component={NotFound} />
    </Switch>
)

export default Routes

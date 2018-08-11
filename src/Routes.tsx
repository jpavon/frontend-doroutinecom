import * as React from 'react'
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom'

import Login from 'views/LoginPage'
import Register from 'views/RegisterPage'
import PasswordForgotten from 'views/PasswordForgottenPage'
import PasswordReset from 'views/PasswordResetPage'
import Routines from 'views/RoutinesPage'
import Routine from 'views/RoutinePage'
import Workout from 'views/WorkoutPage'
import Workouts from 'views/WorkoutsPage'
import Lift from 'views/LiftPage'
import Lifts from 'views/LiftsPage'
import Profile from 'views/ProfilePage'
import Settings from 'views/SettingsPage'
import NotFound from 'views/NotFoundPage'

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

import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { RootState } from 'data/types'
import { pendingWorkoutsSelector } from 'data/workouts/selectors'
import Nav from 'components/Nav'
import NavNoAuth from 'components/NavNoAuth'

interface OwnProps {}

interface StateProps {
    isAuth: boolean
    isPendingWorkouts: boolean
}

interface DispatchProps {}

interface Props extends OwnProps, StateProps, DispatchProps {}

class NavContainer extends React.Component<Props> {
    private isTouchDevice: boolean

    constructor(props: Props) {
        super(props)

        this.isTouchDevice = 'ontouchstart' in document.documentElement
    }

    public render() {
        return this.props.isAuth ? (
            <Nav
                isTouchDevice={this.isTouchDevice}
                isPendingWorkouts={this.props.isPendingWorkouts}
            />
        ) : (
            <NavNoAuth />
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps): StateProps => ({
    isAuth: state.user.isAuth,
    isPendingWorkouts: pendingWorkoutsSelector(state).length > 0
})

const mapDispatchToProps: DispatchProps = {}

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(NavContainer)

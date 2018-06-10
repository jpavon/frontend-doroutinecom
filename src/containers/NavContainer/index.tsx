import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { IRootState } from 'data/types'

import { pendingWorkoutsSelector } from 'data/workouts/selectors'

import Nav from 'components/Nav'
import NavNoAuth from 'components/NavNoAuth'

interface IOwnProps {}

interface IStateProps {
    isAuth: boolean
    isPendingWorkouts: boolean
}

interface IDispatchProps {}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class NavContainer extends React.Component<IProps> {
    private isTouchDevice: boolean

    constructor(props: IProps) {
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

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    isAuth: state.user.isAuth,
    isPendingWorkouts: pendingWorkoutsSelector(state).length > 0
})

const mapDispatchToProps: IDispatchProps = {}

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(NavContainer)

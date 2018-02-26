import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { IRootState } from 'data/types'

import { pendingWorkoutsSelector } from 'data/workouts/selectors'

import Nav from 'components/Nav'
import NavNoAuth from 'components/NavNoAuth'

interface IOwnProps {
    isAuth: boolean
}

interface IStateProps {
    isPendingWorkouts: boolean
}

interface IDispatchProps {
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class NavContainer extends React.Component<IProps> {

    isTouchDevice: boolean

    constructor(props: IProps) {
        super(props)

        this.isTouchDevice = 'ontouchstart' in document.documentElement
    }

    render() {
        return this.props.isAuth ?
            (
                <Nav
                    isTouchDevice={this.isTouchDevice}
                    isPendingWorkouts={this.props.isPendingWorkouts}
                />
            ) :
            (
                <NavNoAuth />
            )
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    isPendingWorkouts: pendingWorkoutsSelector(state).length > 0
})

const mapDispatchToProps: IDispatchProps = {
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(NavContainer)

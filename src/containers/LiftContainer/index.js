import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from 'utils/history'
import { liftSelector } from 'data/lifts/selectors'
import { updateLift, removeLift } from 'data/lifts/actions'
import { STATUS_DELETING } from 'data/utils'

import Lift from 'components/Lift'
import TopNav from 'components/TopNav'

class LiftContainer extends Component {

    static propTypes = {
        liftId: PropTypes.number.isRequired,

        lift: PropTypes.object,
        isDeleting: PropTypes.bool.isRequired,

        updateLift: PropTypes.func.isRequired,
        removeLift: PropTypes.func.isRequired,
    }

    handleRemove = () => {
        this.props.removeLift(this.props.lift.id)
            .then(() => {
                history.push('/lifts')
            })
    }

    render() {
        return this.props.lift ?
            <Fragment>
                <TopNav
                    title="Lift"
                    left={{
                        to: "/lifts"
                    }}
                />
                <Lift
                    lift={this.props.lift}
                    update={this.props.updateLift}
                />
                <TopNav
                    rightLabel="Delete Lift"
                    right={{
                        onClick: this.handleRemove,
                        danger: true,
                        disabled: this.props.isDeleting
                    }}
                />
            </Fragment> : null
    }
}

const mapStateToProps = (state, props) => ({
    lift: liftSelector(props.liftId)(state),
    isDeleting: state.lifts.entitiesStatus[props.liftId] === STATUS_DELETING
})

const mapDispatchToProps = {
    updateLift,
    removeLift
}

export default connect(mapStateToProps, mapDispatchToProps)(LiftContainer)

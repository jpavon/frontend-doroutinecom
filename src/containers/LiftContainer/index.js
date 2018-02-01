import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import history from 'utils/history'
import { liftGraphDataSelector } from 'data/graphs/selectors'
import { liftSelector } from 'data/lifts/selectors'
import { updateLift, removeLift } from 'data/lifts/actions'
import { STATUS_LOADED, STATUS_DELETING } from 'data/utils'

import Lift from 'components/Lift'
import TopNav from 'components/TopNav'
import Graph from 'components/Graph'

class LiftContainer extends Component {

    static propTypes = {
        liftId: PropTypes.number.isRequired,

        lift: PropTypes.object,
        isStatusLoaded: PropTypes.bool.isRequired,
        isDeleting: PropTypes.bool.isRequired,
        liftGraphData: PropTypes.object.isRequired,

        updateLift: PropTypes.func.isRequired,
        removeLift: PropTypes.func.isRequired,
    }

    componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.lift) {
            history.push('/lifts')
        }
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
                {this.props.lift.name &&
                    <Helmet><title>{this.props.lift.name}</title></Helmet>
                }
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
                    title="Progress"
                />
                <Graph
                    type="line"
                    data={this.props.liftGraphData}
                />
                <TopNav
                    title="Top Sets"
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
    isStatusLoaded: state.lifts.fetchStatus === STATUS_LOADED,
    isDeleting: state.lifts.entitiesStatus[props.liftId] === STATUS_DELETING,
    liftGraphData: liftGraphDataSelector(props.liftId)(state)
})

const mapDispatchToProps = {
    updateLift,
    removeLift
}

export default connect(mapStateToProps, mapDispatchToProps)(LiftContainer)

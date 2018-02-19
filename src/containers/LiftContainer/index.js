import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import history from 'utils/history'
import { liftGraphDataSelector } from 'data/graphs/selectors'
import { liftSelector } from 'data/lifts/selectors'
import { topLiftSetsSelector } from 'data/sets/selectors'
import { updateLift, removeLift } from 'data/lifts/actions'
import { STATUS_LOADED, STATUS_DELETING } from 'data/utils'
import { LiftType } from 'data/lifts/types'
import { TopLiftSetsType } from 'data/sets/types'
import { LiftsGraphType } from 'data/graphs/types'

import Lift from 'components/Lift'
import SetsTable from 'components/SetsTable'
import TopNav from 'components/TopNav'
import Graph from 'components/Graph'
import NoData from 'components/NoData'

class LiftContainer extends Component {

    static propTypes = {
        liftId: PropTypes.number.isRequired,

        lift: LiftType,
        isStatusLoaded: PropTypes.bool.isRequired,
        isDeleting: PropTypes.bool.isRequired,
        liftGraphData: LiftsGraphType,
        topLiftSets: TopLiftSetsType,
        weightMeasure: PropTypes.string,

        updateLift: PropTypes.func.isRequired,
        removeLift: PropTypes.func.isRequired,
    }

    componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.lift) {
            history.push('/lifts')
        }
    }

    handleRemove = () => {
        if (window.confirm('Are you sure you want to delete this lift?')) {
            this.props.removeLift(this.props.lift.id)
                .then(() => {
                    history.push('/lifts')
                })
        }
    }

    render() {
        console.log(this.props.liftGraphData)
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
                    title="Recent Progress"
                />
                <Graph
                    type="line"
                    data={this.props.liftGraphData}
                />
                <TopNav
                    title="Top Sets"
                />
                {this.props.topLiftSets.length > 0 ?
                    <SetsTable
                        sets={this.props.topLiftSets}
                        weightMeasure={this.props.weightMeasure}
                    /> :
                    <NoData
                        text="List of top sets will be displayed here when you complete a workout."
                    />
                }
                <TopNav
                    rightLabel="Delete Lift"
                    right={{
                        onClick: this.handleRemove,
                        danger: true,
                        disabled: this.props.isDeleting,
                        className: 'lift-button-remove'
                    }}
                />
            </Fragment> : null
    }
}

const mapStateToProps = (state, props) => ({
    lift: liftSelector(props.liftId)(state),
    isStatusLoaded: state.lifts.fetchStatus === STATUS_LOADED,
    isDeleting: state.lifts.entitiesStatus[props.liftId] === STATUS_DELETING,
    liftGraphData: liftGraphDataSelector(props.liftId)(state),
    topLiftSets: topLiftSetsSelector(props.liftId)(state),
    weightMeasure: state.user.entity.weightMeasure
})

const mapDispatchToProps = {
    updateLift,
    removeLift
}

export default connect(mapStateToProps, mapDispatchToProps)(LiftContainer)

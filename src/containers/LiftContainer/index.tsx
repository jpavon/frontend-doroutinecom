import * as React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { IRootState } from 'data/types'
import { IFormatedLift, ILiftRequestData } from 'data/lifts/types'
import { ITopSet } from 'data/sets/types'
import { ILiftsGraph } from 'data/graphs/types'
import { IFormatedUser } from 'data/user/types'

import history from 'utils/history'
import { liftGraphDataSelector } from 'data/graphs/selectors'
import { liftSelector } from 'data/lifts/selectors'
import { topLiftSetsSelector } from 'data/sets/selectors'
import { putLift, deleteLift } from 'data/lifts/actions'
import { userSelector } from 'data/user/selectors'
import { STATUS_LOADED, STATUS_DELETING } from 'data/constants'

import Lift from 'components/Lift'
import SetsTable from 'components/SetsTable'
import TopNav from 'components/TopNav'
import Graph from 'components/Graph'
import NoData from 'components/NoData'

interface IOwnProps {
    liftId: number
}

interface IStateProps {
    lift: IFormatedLift | null
    isStatusLoaded: boolean
    isDeleting: boolean
    liftGraphData: ILiftsGraph
    topLiftSets: ITopSet[]
    user: IFormatedUser | null
}

interface IDispatchProps {
    putLift: (id: number, data: ILiftRequestData) => void
    deleteLift: (id: number) => void
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class LiftContainer extends React.Component<IProps> {

    componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.lift) {
            history.replace('/lifts')
        }
    }

    handleRemove = () => {
        if (!this.props.lift) { return }

        if (window.confirm('Are you sure you want to delete this lift?')) {
            this.props.deleteLift(this.props.lift.id)
        }
    }

    render() {
        return this.props.lift ? (
            <>
                {this.props.lift.name &&
                    <Helmet>
                        <title>{this.props.lift.name}</title>
                    </Helmet>
                }
                <TopNav
                    title="Lift"
                    left={{
                        to: '/lifts'
                    }}
                />
                <Lift
                    lift={this.props.lift}
                    update={this.props.putLift}
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
                        weightMeasure={this.props.user && this.props.user.weightMeasure}
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
            </>
        ) : null
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    lift: liftSelector(props.liftId)(state),
    isStatusLoaded: state.lifts.fetchStatus === STATUS_LOADED,
    isDeleting: state.lifts.entitiesStatus[props.liftId] === STATUS_DELETING,
    liftGraphData: liftGraphDataSelector(props.liftId)(state),
    topLiftSets: topLiftSetsSelector(props.liftId)(state),
    user: userSelector(state)
})

const mapDispatchToProps: IDispatchProps = {
    putLift,
    deleteLift
}

export default connect(mapStateToProps, mapDispatchToProps)(LiftContainer)

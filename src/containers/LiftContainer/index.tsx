import * as React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { IRootState } from 'data/types'
import { ILift } from 'data/lifts/types'
import { ITopSet } from 'data/sets/types'
import { IGraph } from 'data/graphs/types'
import { IUser } from 'data/user/types'

import history from 'utils/history'
import { liftGraphDataSelector } from 'data/graphs/selectors'
import { liftSelector } from 'data/lifts/selectors'
import { topSetsForALiftSelector } from 'data/sets/selectors'
import { putLift, deleteLift } from 'data/lifts/actions'
import { userSelector } from 'data/user/selectors'
import { statusConstants } from 'data/constants'

import Lift from 'components/Lift'
import SetsTable from 'components/SetsTable'
import TopNav from 'components/TopNav'
import Graph from 'components/Graph'
import NoData from 'components/NoData'
import Button from 'components/Button'

interface IOwnProps {
    liftId: number
}

interface IStateProps {
    lift: ILift | null
    isStatusLoaded: boolean
    isDeleting: boolean
    liftGraphData: IGraph
    topLiftSets: ITopSet[]
    user: IUser | null
}

interface IDispatchProps {
    putLift: typeof putLift
    deleteLift: typeof deleteLift
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class LiftContainer extends React.Component<IProps> {
    public componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.lift) {
            history.replace('/lifts')
        }
    }

    private handleRemove = () => {
        if (!this.props.lift) {
            return
        }

        if (window.confirm('Are you sure you want to delete this lift?')) {
            this.props.deleteLift(this.props.lift.id)
        }
    }

    public render() {
        return this.props.lift && this.props.user ? (
            <>
                {this.props.lift.name && (
                    <Helmet>
                        <title>{this.props.lift.name}</title>
                    </Helmet>
                )}
                <TopNav
                    title="Lift"
                    leftButton={
                        <Button to="/lifts" backIcon={true}>
                            Back
                        </Button>
                    }
                />
                <Lift lift={this.props.lift} update={this.props.putLift} />
                <TopNav title="Recent Progress" />
                <Graph type="line" data={this.props.liftGraphData} />
                <TopNav title="Top Sets" />
                {this.props.topLiftSets.length > 0 ? (
                    <SetsTable
                        sets={this.props.topLiftSets}
                        weightMeasure={this.props.user.weightMeasure}
                        showLiftColumn={false}
                    />
                ) : (
                    <NoData text="List of top sets will be displayed here when you complete a workout." />
                )}
                <TopNav
                    rightButton={
                        <Button
                            onClick={this.handleRemove}
                            danger={true}
                            disabled={this.props.isDeleting}
                            className="lift-button-delete"
                        >
                            Delete Lift
                        </Button>
                    }
                />
            </>
        ) : null
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    lift: liftSelector(state, props.liftId),
    isStatusLoaded: state.lifts.status === statusConstants.STATUS_LOADED,
    isDeleting:
        state.lifts.entitiesStatus[props.liftId] ===
        statusConstants.STATUS_DELETING,
    liftGraphData: liftGraphDataSelector(props.liftId)(state),
    topLiftSets: topSetsForALiftSelector(props.liftId)(state),
    user: userSelector(state)
})

const mapDispatchToProps: IDispatchProps = {
    putLift,
    deleteLift
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LiftContainer)

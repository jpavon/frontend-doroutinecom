import * as React from 'react'
import { connect } from 'react-redux'

import { IRootState } from 'data/types'
import { ILift } from 'data/lifts/types'

import { liftsSelector } from 'data/lifts/selectors'
import { postLift } from 'data/lifts/actions'
import { statusConstants } from 'data/constants'

import Lifts from 'components/Lifts/Lifts'
import Lift from 'components/Lifts/Lift'
import NoData from 'components/NoData'
import TopNav from 'components/TopNav'

interface IOwnProps {}

interface IStateProps {
    lifts: ILift[]
    isLoading: boolean
}

interface IDispatchProps {
    postLift: typeof postLift
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class LiftsContainer extends React.Component<IProps> {
    private handleCreate = () => {
        this.props.postLift()
    }

    public render() {
        return (
            <>
                <TopNav
                    title="Lifts"
                    rightLabel="Create"
                    right={{
                        onClick: this.handleCreate,
                        disabled: this.props.isLoading,
                        className: 'lift-button-create'
                    }}
                />
                <Lifts>
                    {this.props.lifts.length > 0 ? (
                        this.props.lifts.map((lift, i) => (
                            <Lift key={lift.id} lift={lift} />
                        ))
                    ) : (
                        <NoData text="No lift created" />
                    )}
                </Lifts>
            </>
        )
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    lifts: liftsSelector(state),
    isLoading: state.lifts.status === statusConstants.STATUS_LOADING
})

const mapDispatchToProps: IDispatchProps = {
    postLift
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LiftsContainer)

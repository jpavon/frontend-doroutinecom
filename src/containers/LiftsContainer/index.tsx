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
import NavBar from 'components/NavBar'
import Button from 'components/Button'

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
                <NavBar
                    title="Lifts"
                    rightButton={
                        <Button
                            onClick={this.handleCreate}
                            disabled={this.props.isLoading}
                            className="lift-button-create"
                        >
                            Create
                        </Button>
                    }
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

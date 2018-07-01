import * as React from 'react'
import { connect } from 'react-redux'

import { IRootState } from 'data/types'
import { IRoutine } from 'data/routines/types'

import { postRoutine } from 'data/routines/actions'
import {
    routinesSelector,
    defaultRoutinesSelector
} from 'data/routines/selectors'
import { statusConstants } from 'data/constants'

import Routines from 'components/Routines/Routines'
import Routine from 'components/Routines/Routine'
import NoData from 'components/NoData'
import TopNav from 'components/TopNav'
import Info from 'components/Info'
import Button from 'components/Button'

interface IOwnProps {}

interface IStateProps {
    routines: IRoutine[]
    defaultRoutines: IRoutine[]
    isLoading: boolean
}

interface IDispatchProps {
    postRoutine: typeof postRoutine
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class RoutinesContainer extends React.Component<IProps> {
    private handleCreate = () => {
        this.props.postRoutine()
    }

    public render() {
        return (
            <>
                <TopNav
                    title="Routines"
                    rightButton={
                        <Button
                            onClick={this.handleCreate}
                            disabled={this.props.isLoading}
                            className="routine-button-create"
                        >
                            Create
                        </Button>
                    }
                />
                <Routines>
                    {this.props.routines.length > 0 ? (
                        this.props.routines.map((routine, i) => (
                            <Routine key={routine.id} routine={routine} />
                        ))
                    ) : (
                        <NoData text="No routine created." />
                    )}
                </Routines>
                {this.props.defaultRoutines.length > 0 && (
                    <>
                        <TopNav title="PPL" />
                        <Info name="ppl" />
                        <Routines>
                            {this.props.defaultRoutines.map((routine, i) => (
                                <Routine key={routine.id} routine={routine} />
                            ))}
                        </Routines>
                    </>
                )}
            </>
        )
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    routines: routinesSelector(state),
    defaultRoutines: defaultRoutinesSelector(state),
    isLoading: state.routines.status === statusConstants.STATUS_LOADING
})

const mapDispatchToProps: IDispatchProps = {
    postRoutine
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoutinesContainer)

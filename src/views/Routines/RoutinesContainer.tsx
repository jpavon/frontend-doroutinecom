import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { postRoutine } from 'data/routines/actions'
import {
    routinesSelector,
    defaultRoutinesSelector
} from 'data/routines/selectors'
import { statusConstants } from 'data/constants'
import NoData from 'components/NoData'
import NavBar from 'components/NavBar'
// import Info from 'components/Info'
import Button from 'components/Button'
import { Routines, RoutineListItem } from './style'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class RoutinesContainer extends React.Component<Props> {
    private handleCreate = () => {
        this.props.postRoutine()
    }

    public render() {
        return (
            <>
                <NavBar
                    title="Routines"
                    rightButton={
                        <Button
                            onClick={this.handleCreate}
                            disabled={this.props.isLoading}
                            data-e2e="routine-button-create"
                        >
                            Create
                        </Button>
                    }
                />
                <Routines data-e2e="routines">
                    {this.props.routines.length > 0 ? (
                        this.props.routines.map((routine, i) => (
                            <RoutineListItem
                                key={routine.id}
                                to={`/routines/${routine.id}`}
                                data-e2e="routine-list-item"
                            >
                                {routine.name || 'No routine name set.'}
                            </RoutineListItem>
                        ))
                    ) : (
                        <NoData text="No routine created." />
                    )}
                </Routines>
                {/* todo: default routines
                {this.props.defaultRoutines.length > 0 && (
                    <>
                        <NavBar title="PPL" />
                        <Info name="ppl" />
                        <Routines>
                            {this.props.defaultRoutines.map((routine, i) => (
                                <RoutineListItem
                                    to={`/routines/${routine.id}`}
                                >
                                    {routine.name || 'No routine name set.'}
                                </RoutineListItem>
                            ))}
                        </Routines>
                    </>
                )} */}
            </>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    routines: routinesSelector(state),
    defaultRoutines: defaultRoutinesSelector(state),
    isLoading: state.routines.status === statusConstants.STATUS_LOADING
})

const mapDispatchToProps = {
    postRoutine
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoutinesContainer)

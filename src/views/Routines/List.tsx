import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { routinesSelector } from 'data/routines/selectors'
import { Status } from 'data/types'
import NoData from 'components/NoData'
import { Routines, RoutineListItem } from './style'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class RoutinesContainer extends React.Component<Props> {
    public render() {
        return (
            <Routines>
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
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    routines: routinesSelector(state),
    isLoading: state.routines.status === Status.STATUS_LOADING
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoutinesContainer)

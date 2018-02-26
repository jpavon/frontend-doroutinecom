import * as React from 'react'
import { connect } from 'react-redux'

import { IFormatedSet } from 'data/sets/types'
import { IFormatedUser } from 'data/user/types'
import { IRootState, IEntitiesStatus } from 'data/types'

import { createSet, updateSet, removeSet } from 'data/sets/actions'
import { setsExerciseSelector, previouslyCompletedSetsSelector } from 'data/sets/selectors'
import { STATUS_DELETING } from 'data/utils'

import Sets from 'components/Sets/Sets'
import Set from 'components/Sets/Set'

interface IOwnProps {
    exerciseId: number,
    liftId?: number,
    isWorkout: boolean,
    toggleRemoveButtons: () => void,
    isRemoveButtonsVisible: boolean,
}

interface IStateProps {
    sets: IFormatedSet[],
    entitiesStatus: IEntitiesStatus,
    user: IFormatedUser | null,
    previouslyCompletedSets?: IFormatedSet[],
}

interface IDispatchProps {
    createSet: (data: {}) => void
    updateSet: (id: number, data: {}) => void
    removeSet: () => void
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class SetsContainer extends React.Component<IProps> {

    render() {
        return (
            <Sets
                create={this.props.createSet}
                exerciseId={this.props.exerciseId}
                user={this.props.user}
                toggleRemoveButtons={this.props.toggleRemoveButtons}
                isRemoveButtonsVisible={this.props.isRemoveButtonsVisible}
                isWorkout={this.props.isWorkout}
            >
                {this.props.sets.map((set, i) => (
                    <Set
                        key={set.id}
                        index={i}
                        set={set}
                        update={this.props.updateSet}
                        remove={this.props.removeSet}
                        isDeleting={this.props.entitiesStatus[set.id] === STATUS_DELETING}
                        isRemoveButtonsVisible={!this.props.isWorkout || this.props.isRemoveButtonsVisible}
                        previousSet={this.props.previouslyCompletedSets && this.props.previouslyCompletedSets[i]}
                    />
                ))}
            </Sets>
        )
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    sets: setsExerciseSelector(props.exerciseId)(state),
    entitiesStatus: state.sets.entitiesStatus,
    user: state.user.entity,
    previouslyCompletedSets: props.liftId && previouslyCompletedSetsSelector(props.exerciseId, props.liftId)(state),
})

const mapDispatchToProps: IDispatchProps = {
    createSet,
    updateSet,
    removeSet
}

export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer)

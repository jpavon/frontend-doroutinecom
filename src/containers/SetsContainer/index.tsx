import * as React from 'react'
import { connect } from 'react-redux'

import { IFormatedSet } from 'data/sets/types'
import { IFormatedUser } from 'data/user/types'
import { IRootState, IEntitiesStatus } from 'data/types'

import { postSet, putSet, deleteSet } from 'data/sets/actions'
import { userSelector } from 'data/user/selectors'
import { setsExerciseSelector, previouslyCompletedSetsSelector } from 'data/sets/selectors'
import { statusConstants } from 'data/constants'

import Sets from 'components/Sets/Sets'
import Set from 'components/Sets/Set'

interface IOwnProps {
    exerciseId: number
    liftId: number | null
    isWorkout: boolean
    toggleRemoveButtons: () => void
    isRemoveButtonsVisible: boolean
}

interface IStateProps {
    sets: IFormatedSet[],
    entitiesStatus: IEntitiesStatus
    user: IFormatedUser | null
    previouslyCompletedSets: IFormatedSet[]
}

interface IDispatchProps {
    postSet: typeof postSet
    putSet: typeof putSet
    deleteSet: typeof deleteSet
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class SetsContainer extends React.Component<IProps> {

    handleCreate = () => {
        this.props.postSet({
            exerciseId: this.props.exerciseId
        })
    }

    render() {
        return this.props.user ? (
            <Sets
                create={this.handleCreate}
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
                        update={this.props.putSet}
                        remove={this.props.deleteSet}
                        isDeleting={this.props.entitiesStatus[set.id] === statusConstants.STATUS_DELETING}
                        isRemoveButtonsVisible={!this.props.isWorkout || this.props.isRemoveButtonsVisible}
                        previousSet={this.props.previouslyCompletedSets && this.props.previouslyCompletedSets[i]}
                    />
                ))}
            </Sets>
        ) : null
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    sets: setsExerciseSelector(props.exerciseId)(state),
    entitiesStatus: state.sets.entitiesStatus,
    user: userSelector(state),
    previouslyCompletedSets: props.liftId ? previouslyCompletedSetsSelector(props.exerciseId, props.liftId)(state) : [],
})

const mapDispatchToProps: IDispatchProps = {
    postSet,
    putSet,
    deleteSet
}

export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createSet, updateSet, removeSet } from 'data/sets/actions'
import { setsExerciseSelector, previouslyCompletedSetsSelector } from 'data/sets/selectors'
import { STATUS_DELETING } from 'data/utils'
import { SetsType } from 'data/sets/types'
import { UserType } from 'data/user/types'
import { StatusType } from 'data/types'

import Sets from 'components/Sets/Sets'
import Set from 'components/Sets/Set'

class SetsContainer extends Component {

    static propTypes = {
        exerciseId: PropTypes.number.isRequired,
        liftId: PropTypes.number,
        isWorkout: PropTypes.bool.isRequired,
        toggleRemoveButtons: PropTypes.func.isRequired,
        isRemoveButtonsVisible: PropTypes.bool.isRequired,

        sets: SetsType,
        entitiesStatus: PropTypes.objectOf(StatusType),
        user: UserType,
        previouslyCompletedSets: SetsType,

        createSet: PropTypes.func.isRequired,
        updateSet: PropTypes.func.isRequired,
        removeSet: PropTypes.func.isRequired,
    }

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

const mapStateToProps = (state, props) => ({
    sets: setsExerciseSelector(props.exerciseId)(state),
    entitiesStatus: state.sets.entitiesStatus,
    user: state.user.entity,
    previouslyCompletedSets: props.liftId && previouslyCompletedSetsSelector(props.exerciseId, props.liftId)(state),
})

const mapDispatchToProps = {
    createSet,
    updateSet,
    removeSet
}

export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createSet, updateSet, removeSet } from 'data/sets/actions'
import { setsExerciseSelector, previouslyCompletedSetsSelector } from 'data/sets/selectors'
import { STATUS_DELETING } from 'data/utils'

import Sets from 'components/Sets/Sets'
import Set from 'components/Sets/Set'

class SetsContainer extends Component {

    static propTypes = {
        exerciseId: PropTypes.number.isRequired,
        liftId: PropTypes.number,
        isWorkout: PropTypes.bool.isRequired,
        showDelete: PropTypes.bool.isRequired,

        sets: PropTypes.array.isRequired,
        entitiesStatus: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
        previouslyCompletedSets: PropTypes.array,

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
            >
                {this.props.sets.map((set, i) => (
                    <Set
                        key={set.id}
                        index={i}
                        set={set}
                        update={this.props.updateSet}
                        remove={this.props.removeSet}
                        isWorkout={this.props.isWorkout}
                        isDeleting={this.props.entitiesStatus[set.id] === STATUS_DELETING}
                        showDelete={this.props.showDelete}
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
    previouslyCompletedSets: props.liftId && previouslyCompletedSetsSelector(props.exerciseId, props.liftId)(state)
})

const mapDispatchToProps = {
    createSet,
    updateSet,
    removeSet
}

export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer)

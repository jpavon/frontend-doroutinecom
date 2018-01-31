import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createSet, updateSet, removeSet } from 'data/sets/actions'
import { setsSelector } from 'data/sets/selectors'
import { STATUS_DELETING } from 'data/utils'

import Sets from 'components/Sets/Sets'
import Set from 'components/Sets/Set'

class SetsContainer extends Component {

    static propTypes = {
        exerciseId: PropTypes.number.isRequired,
        isWorkout: PropTypes.bool.isRequired,
        showDelete: PropTypes.bool.isRequired,

        sets: PropTypes.array.isRequired,
        entitiesStatus: PropTypes.object.isRequired,

        createSet: PropTypes.func.isRequired,
        updateSet: PropTypes.func.isRequired,
        removeSet: PropTypes.func.isRequired,
    }

    render() {
        return (
            <Sets
                create={this.props.createSet}
                exerciseId={this.props.exerciseId}
            >
                {this.props.sets.map((set, i) => (
                    <Set
                        key={set.id}
                        i={i}
                        set={set}
                        update={this.props.updateSet}
                        remove={this.props.removeSet}
                        isWorkout={this.props.isWorkout}
                        isDeleting={this.props.entitiesStatus[set.id] === STATUS_DELETING}
                        showDelete={this.props.showDelete}
                    />
                ))}
            </Sets>
        )
    }
}

const mapStateToProps = (state, props) => ({
    sets: setsSelector(props.exerciseId)(state),
    entitiesStatus: state.sets.entitiesStatus
})

const mapDispatchToProps = {
    createSet,
    updateSet,
    removeSet
}

export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer)

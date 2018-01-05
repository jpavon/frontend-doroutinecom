import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createSet, updateSet, removeSet } from 'data/sets/actions'
import { setsSelector } from 'data/sets/selectors'
import { routineByIdSelector } from 'data/routines/selectors'

import Sets from 'components/Sets/Sets'
import Set from 'components/Sets/Set'

class SetsContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,
        exerciseId: PropTypes.number.isRequired,

        sets: PropTypes.array.isRequired,
        weightMeasure: PropTypes.string.isRequired,

        createSet: PropTypes.func.isRequired,
        updateSet: PropTypes.func.isRequired,
        removeSet: PropTypes.func.isRequired,
    }

    render() {
        return (
            <Sets create={this.props.createSet} exerciseId={this.props.exerciseId}>
                {this.props.sets.map((set, i) => (
                    <Set
                        key={set.id}
                        i={i}
                        set={set}
                        weightMeasure={this.props.weightMeasure}
                        update={this.props.updateSet}
                        remove={this.props.removeSet}
                    />
                ))}
            </Sets>
        )
    }
}

const mapStateToProps = (state, props) => ({
    sets: setsSelector(props.exerciseId)(state),
    weightMeasure: routineByIdSelector(props.routineId)(state).weightMeasure
})

const mapDispatchToProps = {
    createSet,
    updateSet,
    removeSet
}


export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer)

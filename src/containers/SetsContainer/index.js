import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createSet, updateSet, removeSet } from 'data/sets/actions'
import { setsSelector } from 'data/sets/selectors'
import { exerciseLiftSelector } from 'data/lifts/selectors'

import SetContainer from 'containers/SetsContainer/SetContainer'

import ButtonIcon from 'components/ButtonIcon'

class SetsContainer extends Component {

    static propTypes = {
        exerciseId: PropTypes.number.isRequired,

        sets: PropTypes.array.isRequired,
        lift: PropTypes.object.isRequired,

        createSet: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
                {this.props.sets.map((set, i) => (
                    <SetContainer
                        key={set.id}
                        set={set}
                        index={i}
                        lift={this.props.lift}
                    />
                ))}
                <div className="set-button">
                    <ButtonIcon plus onClick={() => this.props.createSet(this.props.exerciseId)} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    sets: setsSelector(props.exerciseId)(state),
    lift: exerciseLiftSelector(props.exerciseId)(state)
})

const mapDispatchToProps = {
    createSet
}


export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer)

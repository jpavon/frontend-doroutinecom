import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setsSelector } from 'data/sets/selectors'
import { updateSet } from 'data/sets/actions'
import { exerciseLiftSelector } from 'data/lifts/selectors'

import SetsContainerForm from 'containers/SetsContainer/Form'

import './style.css'

class SetsContainer extends Component {

    static propTypes = {
        exerciseId: PropTypes.number.isRequired,
        sets: PropTypes.array.isRequired,
        updateSet: PropTypes.func.isRequired,
        lift: PropTypes.object.isRequired,
    }

    componentDidMount() {
    }

    render() {
        console.log(this.props.lift)
        return (
            <div>
                {this.props.sets.length > 0 && this.props.sets.map((set, i) => (
                    <div key={i} className="set">
                        <SetsContainerForm
                            i={i}
                            entity={set}
                            update={this.props.updateSet}
                            lift={this.props.lift}
                        />
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    sets: setsSelector(props.exerciseId)(state),
    lift: exerciseLiftSelector(props.exerciseId)(state)
})

const mapDispatchToProps = {
    updateSet
}

export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer)

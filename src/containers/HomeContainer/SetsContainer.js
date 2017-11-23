import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withForm from 'components/Form'

import { createSet, updateSet, removeSet } from 'data/sets/actions'
import { setsSelector } from 'data/sets/selectors'
import { exerciseLiftSelector } from 'data/lifts/selectors'

import Button from 'components/Button'

import Input from 'components/Form/Input'

const setForm = ({errors, values, lift}) => (
    <div className="set-row">
        <div className="set-col">
            <Input
                name="rmPercentage"
                // item={{
                //     name: 'RM%',
                //     position: 'right'
                // }}
                alignRight
            />
        </div>

        <div className="set-col">
            <Input
                name="reps"
                // item={{
                //     name: values.reps > 1 ? 'Reps' : 'Rep',
                //     position: 'right'
                // }}
                alignRight
            />
        </div>
    </div>
)

const SetForm = withForm(setForm)

class SetsContainer extends Component {

    static propTypes = {
        exerciseId: PropTypes.number.isRequired,

        ui: PropTypes.object.isRequired,
        sets: PropTypes.array.isRequired,
        lift: PropTypes.object.isRequired,

        createSet: PropTypes.func.isRequired,
        updateSet: PropTypes.func.isRequired,
        removeSet: PropTypes.func.isRequired,
    }

    render() {
        const round5 = (x) => (Math.ceil(x/2.5)*2.5)

        return (
            <div>
                {this.props.sets.map((set, i) => (
                    <div key={i} className="block-workout-lift-set">
                        <SetForm
                            i={i}
                            entity={set}
                            update={this.props.updateSet}
                            lift={this.props.lift}
                        />
                        <div className="set-weight">
                            <div className="set-weight-value">
                                @ {round5(set.rmPercentage * this.props.lift.rm / 100)} <span className="set-mass">KG</span>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="set-button">
                    <Button onClick={() => this.props.createSet(this.props.exerciseId)}>New set</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    sets: setsSelector(props.exerciseId)(state),
    ui: state.ui,
    lift: exerciseLiftSelector(props.exerciseId)(state)
})

const mapDispatchToProps = {
    createSet,
    updateSet,
    removeSet
}


export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createSet, updateSet, removeSet } from 'data/sets/actions'
import { setsSelector } from 'data/sets/selectors'
import { exerciseLiftSelector } from 'data/lifts/selectors'

import Button from 'components/Button'
import withForm from 'components/Form/withForm'
import Input from 'components/Form/Input'
import InputWrapper from 'components/Form/InputWrapper'
import InputItem from 'components/Form/InputItem'

const setForm = ({data}) => (
    <div className="set-row">
        <div className="set-col">
            <InputWrapper>
                <Input
                    name="rmPercentage"
                    alignRight
                />
                <InputItem
                    item="RM%"
                />
            </InputWrapper>
        </div>

        <div className="set-col">
            <InputWrapper>
                <Input
                    name="reps"
                    alignRight
                />
                <InputItem
                    item={data.reps > 1 ? 'Reps' : 'Rep'}
                />
            </InputWrapper>
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
                            data={set}
                            update={this.props.updateSet}
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

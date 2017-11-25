import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createSet, updateSet, removeSet } from 'data/sets/actions'
import { setsSelector } from 'data/sets/selectors'
import { exerciseLiftSelector } from 'data/lifts/selectors'

import ButtonIcon from 'components/ButtonIcon'
import withForm from 'components/Form/withForm'
import Input from 'components/Form/Input'
import InputWrapper from 'components/Form/InputWrapper'
import InputItem from 'components/Form/InputItem'

const round5 = (x) => (Math.ceil(x/2.5)*2.5)

const setForm = ({data, lift, i}) => (
    <div>
        <div className="set-row">
            <div className="set-col">
                Set {i + 1}
            </div>
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


        </div>

        <div className="set-weight">
            <div className="set-weight-value">
                <Input
                    name="reps"
                    alignRight
                />
                REPS @ {round5(data.rmPercentage * lift.rm / 100)} <span className="set-mass">KG</span>
            </div>
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
        return (
            <div>
                {this.props.sets.map((set, i) => (
                    <div key={i} className="block-workout-lift-set">
                        <SetForm
                            i={i}
                            data={set}
                            update={this.props.updateSet}
                            lift={this.props.lift}
                        />
                        <ButtonIcon remove danger onClick={() => this.props.removeSet(set.id)} />
                    </div>
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
    ui: state.ui,
    lift: exerciseLiftSelector(props.exerciseId)(state)
})

const mapDispatchToProps = {
    createSet,
    updateSet,
    removeSet
}


export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer)

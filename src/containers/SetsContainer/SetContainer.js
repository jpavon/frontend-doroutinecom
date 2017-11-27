import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateSet, removeSet } from 'data/sets/actions'
import { setSelector } from 'data/sets/selectors'

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
                        value={data.rmPercentage}
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
                    value={data.reps}
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
        index: PropTypes.number.isRequired,
        lift: PropTypes.object.isRequired,

        set: PropTypes.object.isRequired,

        updateSet: PropTypes.func.isRequired,
        removeSet: PropTypes.func.isRequired,
    }

    render() {
        console.log('set', this.props.set)

        return (
            <div className="block-workout-lift-set">

                <SetForm
                    i={this.props.index}
                    data={this.props.set}
                    update={this.props.updateSet}
                    lift={this.props.lift}
                />
                <ButtonIcon remove danger onClick={() => this.props.removeSet(this.props.set.id)} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = {
    updateSet,
    removeSet
}


export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer)

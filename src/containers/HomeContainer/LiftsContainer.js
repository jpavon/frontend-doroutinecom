import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { liftsSelector } from 'data/lifts/selectors'
import { createLift, updateLift, removeLift } from 'data/lifts/actions'

import Button from 'components/Button'

import { Field } from 'formik'
import withForm from 'components/Form'

const FormComponent = ({errors}) => (
    <form>
        <label htmlFor="name">Lift name:</label>
        <Field
            id="name"
            name="name"
        />
        {errors.name && <div>{errors.name}</div>}

        <label htmlFor="rm">Lift rm:</label>
        <Field
            id="rm"
            name="rm"
        />
        {errors.rm && <div>{errors.rm}</div>}
    </form>
)
const Form = withForm(FormComponent)

class LiftsContainer extends Component {

    static propTypes = {
        ui: PropTypes.object.isRequired,
        lifts: PropTypes.array.isRequired,
        createLift: PropTypes.func.isRequired,
        updateLift: PropTypes.func.isRequired,
        removeLift: PropTypes.func.isRequired,
    }

    handleCreate = () => {
        this.props.createLift()
    }

    handleRemove = (id) => {
        this.props.removeLift(id)
    }

    render() {
        return (
            <div>
                <h2>Lifts</h2>
                <div className="block-lifts">
                    {this.props.lifts.length > 0 && this.props.lifts.map((lift, i) => (
                        <div key={i} className="block-lift">
                            {this.props.ui.isEditing ?
                                <div>
                                    <Form
                                        entity={lift}
                                        update={this.props.updateLift}
                                    />
                                    <Button onClick={() => this.handleRemove(lift.id)}>Remove</Button>
                                </div>
                            :
                                <div>
                                    {lift.name} <br/>
                                    Rm: {lift.rm}
                                </div>
                            }
                        </div>
                    ))}
                </div>

                {this.props.ui.isEditing &&
                    <div className="lift-create-button">
                        <Button onClick={this.handleCreate}>Create a new lift</Button>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    lifts: liftsSelector(state)
})

const mapDispatchToProps = {
    updateLift,
    createLift,
    removeLift
}

export default connect(mapStateToProps, mapDispatchToProps)(LiftsContainer)

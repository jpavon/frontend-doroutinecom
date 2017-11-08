import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Button from 'components/Button'
import { updateLift, removeLift } from 'data/lifts/actions'
import { liftSelector } from 'data/lifts/selectors'
import Form from 'containers/LiftContainer/Form'

import './style.css'

class LiftContainer extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        lift: PropTypes.object,

        updateLift: PropTypes.func.isRequired,
        removeLift: PropTypes.func.isRequired,
    }

    componentDidMount() {
    }

    handleRemove = () => {
        this.props.removeLift(this.props.id)
            .then((data) => {
                this.props.history.push('/lifts')
            })
    }

    render() {
        return (
            <div className="col">
                <Button to="/lifts">&lt; Go back</Button>
                {Object.keys(this.props.lift).length !== 0 &&
                    <Form
                        entity={this.props.lift}
                        update={this.props.updateLift}
                    />
                }

                <Button onClick={this.handleRemove}>Remove lift</Button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    lift: liftSelector(props.id)(state),
})

const mapDispatchToProps = {
    updateLift,
    removeLift,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LiftContainer))

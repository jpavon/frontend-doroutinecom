import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { liftsSelector } from 'data/lifts/selectors'
import { createLift, updateLift } from 'data/lifts/actions'

import Button from 'components/Button'

import './style.css'

class LiftsContainer extends Component {

    static propTypes = {
        lifts: PropTypes.array.isRequired,
        createLift: PropTypes.func.isRequired,
        updateLift: PropTypes.func.isRequired,
    }

    componentDidMount() {
    }

    handleCreate = (e) => {
        this.props.createLift()
            .then((data) => {
                this.props.history.push(`/lifts/${data.payload.id}`)
            })
    }

    render() {
        return (
            <div className="col">
                <div className="lift-create-button">
                    <Button onClick={this.handleCreate}>Create a new lift</Button>
                </div>
                {this.props.lifts.length > 0 && this.props.lifts.map((lift, i) => (
                    <div key={i} className="lift">
                        <div className="lift-info">
                            <div className="lift-name">
                                {lift.name}
                            </div>
                            <div className="lift-rm">
                                RM: {lift.rm}
                            </div>
                        </div>
                        <div className="lift-button">
                            <Button to={`lifts/${lift.id}`}>Edit</Button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    lifts: liftsSelector(state)
})

const mapDispatchToProps = {
    updateLift,
    createLift
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LiftsContainer))

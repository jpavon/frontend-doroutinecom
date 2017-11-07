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
                <div>
                    <Button onClick={this.handleCreate}>Create a new lift</Button>
                </div>
                {this.props.lifts.length > 0 && this.props.lifts.map((lift, i) => (
                    <div key={i} className="set">
                        {lift.name}
                        <Button to={`lifts/${lift.id}`}>Edit</Button>
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

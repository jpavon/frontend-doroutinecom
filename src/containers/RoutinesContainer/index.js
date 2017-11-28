import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { createRoutine, updateRoutine, removeRoutine } from 'data/routines/actions'
import { routinesSelector } from 'data/routines/selectors'

import Button from 'components/Button'

class RoutinesContainer extends Component {

    static propTypes = {
        routines: PropTypes.array.isRequired,

        createRoutine: PropTypes.func.isRequired,
        updateRoutine: PropTypes.func.isRequired,
        removeRoutine: PropTypes.func.isRequired,
    }

    handleCreate = () => {
        this.props.createRoutine()
            .then((resp) => {
                this.props.history.push(`/r/${resp.payload.slug}`)
            })
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.routines.map((routine, i) => (
                        <div key={routine.id}>
                            <h2><Link to={`/r/${routine.slug}`}>{routine.name || 'No name set for routine'}</Link></h2>
                        </div>
                    ))}
                </div>
                <br />
                <Button onClick={this.handleCreate}>Create a new routine</Button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    routines: routinesSelector(props.blockId)(state),
})

const mapDispatchToProps = {
    createRoutine,
    updateRoutine,
    removeRoutine
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoutinesContainer))

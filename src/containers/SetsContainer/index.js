import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setsSelector } from 'data/sets/selectors'
import { updateSet } from 'data/sets/actions'

import SetsContainerForm from 'containers/SetsContainer/Form'

import './style.css'

class SetsContainer extends Component {

    static propTypes = {
        exerciseId: PropTypes.number.isRequired,
        sets: PropTypes.array.isRequired,
        updateSet: PropTypes.func.isRequired
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {this.props.sets.length > 0 && this.props.sets.map((set, i) => (
                    <div key={i} className="set" style={{padding: '10px', 'backgroundColor': '#DDD'}}>
                        <SetsContainerForm
                            entity={set}
                            update={this.props.updateSet}
                        />
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    sets: setsSelector(props.exerciseId)(state),
})

const mapDispatchToProps = {
    updateSet
}

export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer)

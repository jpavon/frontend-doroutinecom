import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { blocksWorkoutsSelector } from 'data/workouts/selectors'

import WorkoutsContainer from 'containers/HomeContainer/WorkoutsContainer'

import Button from 'components/Button'

class BlocksContainer extends Component {

    static propTypes = {
        ui: PropTypes.object.isRequired,
        blocks: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            blocks: props.blocks
        }
    }

    handleCreate = () => {
        this.setState((prevState) => {
            prevState.blocks.push(prevState.blocks[prevState.blocks.length - 1] + 1)
            return { blocks: prevState.blocks }
        })
    }

    render() {
        return (
            <div>
                {this.state.blocks.map((blockId) => (
                    <div key={blockId} className="block">
                        <h2>Block {blockId}</h2>
                        <WorkoutsContainer blockId={blockId} />
                    </div>
                ))}
                <div className="block-button-create">
                    <Button onClick={this.handleCreate} className="button-small">Create New Block</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    ui: state.ui,
    blocks: blocksWorkoutsSelector(state)
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(BlocksContainer)
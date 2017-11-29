import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import union from 'lodash/union'

import { blocksWorkoutsSelector } from 'data/workouts/selectors'

import WorkoutsContainer from 'containers/WorkoutsContainer'

import Button from 'components/Button'

class BlocksContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,

        blocks: PropTypes.array.isRequired
    }

    state = {
        blocks: this.props.blocks
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.blocks !== this.state.blocks) {
    //         this.setState({ blocks: nextProps.blocks })
    //     }
    // }

    handleCreate = () => {
        this.setState((prevState) => {
            const defaultArr = [1]
            prevState.blocks.push(prevState.blocks[prevState.blocks.length - 1] + 1)

            return { blocks: union(defaultArr, prevState.blocks).filter(Number) }
        })
    }

    render() {
        return (
            <div>
                {this.state.blocks.map((blockId) => (
                    <div key={blockId} className="block">
                        <h2>Block {blockId}</h2>
                        <WorkoutsContainer blockId={blockId} routineId={this.props.routineId} />
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
    blocks: blocksWorkoutsSelector(props.routineId)(state)
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(BlocksContainer)

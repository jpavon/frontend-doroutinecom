import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { blocksWorkoutsSelector } from 'data/workouts/selectors'

import WorkoutsContainer from 'containers/WorkoutsContainer'

import WorkoutsBlocks from 'components/WorkoutsBlocks/WorkoutsBlocks'
import WorkoutsBlock from 'components/WorkoutsBlocks/WorkoutsBlock'

class WorkoutsBlocksContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,

        blocks: PropTypes.array.isRequired
    }

    state = {
        blocks: this.props.blocks
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.blocks !== this.state.blocks &&
            nextProps.blocks.length > this.state.blocks.length) {
            this.setState({ blocks: nextProps.blocks })
        }
    }

    handleCreate = () => {
        this.setState((prevState) => {
            prevState.blocks.push(prevState.blocks[prevState.blocks.length - 1] + 1)

            return { blocks: prevState.blocks.filter(Number) }
        })
    }

    render() {
        return (
            <WorkoutsBlocks handleCreate={this.handleCreate}>
                {this.state.blocks.map((blockId) => (
                    <WorkoutsBlock key={blockId} blockId={blockId}>
                        <WorkoutsContainer blockId={blockId} routineId={this.props.routineId} />
                    </WorkoutsBlock>
                ))}
            </WorkoutsBlocks>
        )
    }
}

const mapStateToProps = (state, props) => ({
    blocks: blocksWorkoutsSelector(props.routineId)(state)
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsBlocksContainer)

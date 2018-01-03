import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { blocksSelector, completedBlocks } from 'data/workouts/selectors'

import WorkoutsContainer from 'containers/WorkoutsContainer'

import WorkoutsBlocks from 'components/WorkoutsBlocks/WorkoutsBlocks'
import WorkoutsBlock from 'components/WorkoutsBlocks/WorkoutsBlock'

class WorkoutsBlocksContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,

        blocks: PropTypes.array.isRequired,
        completedBlocks: PropTypes.array.isRequired
    }

    state = {
        activeTab: this.props.blocks.length - 1,
        blocks: this.props.blocks,
        completedBlocks: this.props.completedBlocks
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            completedBlocks: nextProps.completedBlocks
        })

        if (nextProps.blocks > this.state.blocks) {
            this.setState({
                blocks: nextProps.blocks
            })
        }
    }

    handleCreate = () => {
        this.setState((prevState) => {
            return {
                activeTab: prevState.blocks.length,
                blocks: [
                    ...prevState.blocks,
                    prevState.blocks.length + 1
                ]
            }
        })
    }

    handleTabOnSelect = (tabIndex) => {
        this.setState({ activeTab: tabIndex })
    }

    render() {
        return (
            <WorkoutsBlocks
                activeTab={this.state.activeTab}
                blocks={this.state.blocks}
                completedBlocks={this.state.completedBlocks}
                onSelect={this.handleTabOnSelect}
                create={this.handleCreate}
            >
                {this.state.blocks.map((id) => (
                    <WorkoutsBlock key={id} blockId={id}>
                        <WorkoutsContainer blockId={id} routineId={this.props.routineId} />
                    </WorkoutsBlock>
                ))}
            </WorkoutsBlocks>
        )
    }
}

const mapStateToProps = (state, props) => ({
    blocks: blocksSelector(props.routineId)(state),
    completedBlocks: completedBlocks(props.routineId)(state)
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsBlocksContainer)

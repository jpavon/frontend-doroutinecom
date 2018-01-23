import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { weeksSelector, completedWeeks } from 'data/workouts/selectors'

import WorkoutsContainer from 'containers/WorkoutsContainer'

import Weeks from 'components/Weeks/Weeks'
import Week from 'components/Weeks/Week'

class WeeksContainer extends Component {

    static propTypes = {
        routineId: PropTypes.number.isRequired,

        weeks: PropTypes.array.isRequired,
        completedWeeks: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props)

        const activeTab = props.completedWeeks.indexOf(0)
        const lastTab = props.weeks.length - 1

        this.state = {
            activeTab: activeTab === -1 ? lastTab : activeTab,
            weeks: props.weeks,
            completedWeeks: props.completedWeeks
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            completedWeeks: nextProps.completedWeeks
        })

        if (nextProps.weeks > this.state.weeks) {
            this.setState({
                weeks: nextProps.weeks
            })
        }
    }

    handleCreate = () => {
        this.setState((prevState) => {
            return {
                activeTab: prevState.weeks.length,
                weeks: [
                    ...prevState.weeks,
                    prevState.weeks.length + 1
                ]
            }
        })
    }

    handleTabOnSelect = (tabIndex) => {
        this.setState({ activeTab: tabIndex })
    }

    render() {
        return (
            <Weeks
                activeTab={this.state.activeTab}
                weeks={this.state.weeks}
                completedWeeks={this.state.completedWeeks}
                onSelect={this.handleTabOnSelect}
                create={this.handleCreate}
            >
                {this.state.weeks.map((id) => (
                    <Week key={id}>
                        <WorkoutsContainer weekId={id} routineId={this.props.routineId} />
                    </Week>
                ))}
            </Weeks>
        )
    }
}

const mapStateToProps = (state, props) => ({
    weeks: weeksSelector(props.routineId)(state),
    completedWeeks: completedWeeks(props.routineId)(state)
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(WeeksContainer)

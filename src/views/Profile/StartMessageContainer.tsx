import * as React from 'react'
import { connect } from 'react-redux'
import * as store from 'store'

import { RootState } from 'data/types'
import { completedSetsSelector } from 'data/sets/selectors'
import {
    workoutsSelector,
    completedWorkoutsSelector
} from 'data/workouts/selectors'
import Button from 'components/Button'
import TickSvg from 'media/tick.svg'
import XSvg from 'media/x.svg'
import {
    StartMessage,
    StartMessageTitle,
    StartMessageList,
    StartMessageListItem,
    StartMessageHideButton
} from './style'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

interface State {
    hideStartMessage: boolean
}

class StartMessageContainer extends React.Component<Props, State> {
    public readonly state = {
        hideStartMessage: !!store.get('hideStartMessage')
    }

    private handleHideStartMessage = () => {
        store.set('hideStartMessage', true)

        this.setState({
            hideStartMessage: true
        })
    }

    public render() {
        return !this.state.hideStartMessage ? (
            <StartMessage data-e2e="start-message">
                <StartMessageTitle>
                    Getting Started - Completed{' '}
                    {Number(this.props.hasWorkouts) +
                        Number(this.props.hasCompletedWorkouts) +
                        Number(this.props.hasCompletedSets)}/3
                </StartMessageTitle>
                <StartMessageList>
                    <StartMessageListItem>
                        {!this.props.hasWorkouts ? <XSvg /> : <TickSvg />}
                        Create your first workout from a routine
                        <Button to="/routines">Routines</Button>
                    </StartMessageListItem>
                    <StartMessageListItem>
                        {!this.props.hasCompletedSets ? <XSvg /> : <TickSvg />}
                        Complete multiple sets on a workout
                        <Button to="/workouts">Workouts</Button>
                    </StartMessageListItem>
                    <StartMessageListItem>
                        {!this.props.hasCompletedWorkouts ? (
                            <XSvg />
                        ) : (
                            <TickSvg />
                        )}
                        Complete a workout
                        <Button to="/workouts">Workouts</Button>
                    </StartMessageListItem>
                </StartMessageList>
                {this.props.hasWorkouts &&
                    this.props.hasCompletedSets &&
                    this.props.hasCompletedWorkouts && (
                        <StartMessageHideButton
                            onClick={this.handleHideStartMessage}
                            data-e2e="start-message-hide-button"
                        >
                            Hide this message
                        </StartMessageHideButton>
                    )}
            </StartMessage>
        ) : null
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    hasWorkouts: workoutsSelector(state).length > 0,
    hasCompletedWorkouts: completedWorkoutsSelector(state).length > 0,
    hasCompletedSets: completedSetsSelector(state).length > 0
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StartMessageContainer)

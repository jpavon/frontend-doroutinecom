import * as React from 'react'

import Button from 'components/Button'

import tickIcon from 'media/tick.svg'
import x from 'media/x.svg'

import './style.scss'

interface IProps {
    hideStartMessage: () => void
    isHidden: boolean
    hasWorkouts: boolean
    hasCompletedWorkouts: boolean
    hasCompletedSets: boolean
}

const Start: React.SFC<IProps> = ({
    hideStartMessage,
    isHidden,
    hasWorkouts,
    hasCompletedWorkouts,
    hasCompletedSets
}) =>
    !isHidden ? (
        <div className="start">
            <h2 className="start-title">
                Getting Started - Completed{' '}
                {Number(hasWorkouts) +
                    Number(hasCompletedWorkouts) +
                    Number(hasCompletedSets)}/3
            </h2>
            <div className="start-list">
                <div className="start-list-item">
                    {!hasWorkouts ? (
                        <img src={x} alt="Not Completed" />
                    ) : (
                        <img src={tickIcon} alt="Completed" />
                    )}
                    Create your first workout from a routine
                    <Button to="/routines">Routines</Button>
                </div>
                <div className="start-list-item">
                    {!hasCompletedSets ? (
                        <img src={x} alt="Not Completed" />
                    ) : (
                        <img src={tickIcon} alt="Completed" />
                    )}
                    Complete multiple sets on a workout
                    <Button to="/workouts">Workouts</Button>
                </div>
                <div className="start-list-item">
                    {!hasCompletedWorkouts ? (
                        <img src={x} alt="Not Completed" />
                    ) : (
                        <img src={tickIcon} alt="Completed" />
                    )}
                    Complete a workout
                    <Button to="/workouts">Workouts</Button>
                </div>
            </div>
            {hasWorkouts &&
                hasCompletedSets &&
                hasCompletedWorkouts && (
                    <Button
                        className="start-hide-button"
                        onClick={hideStartMessage}
                    >
                        Hide this message
                    </Button>
                )}
        </div>
    ) : null

export default Start

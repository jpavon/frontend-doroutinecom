import * as React from 'react'

import Button from 'components/Button'

const tickIcon = require('media/tick.svg')
const x = require('media/x.svg')

import './style.css'

interface IProps {
    hideStartMessage: () => void
    isHidden: boolean
    hasWorkouts: boolean
    hasCompletedWorkouts: boolean
    hasCompletedSets: boolean
}

const Start = ({hideStartMessage, isHidden, hasWorkouts, hasCompletedWorkouts, hasCompletedSets}: IProps) => (
    !isHidden ? (
        <div className="start">
            <h2 className="start-title">
                Getting Started - Completed {+hasWorkouts + +hasCompletedWorkouts + +hasCompletedSets}/3
            </h2>
            <div className="start-list">
                <div className="start-list-item">
                    {!hasWorkouts ?
                        <img src={x} alt="Not Completed" /> :
                        <img src={tickIcon} alt="Completed" />
                    }
                    Create your first workout from a routine
                    <Button to="/routines">Routines</Button>
                </div>
                <div className="start-list-item">
                    {!hasCompletedSets ?
                        <img src={x} alt="Not Completed" /> :
                        <img src={tickIcon} alt="Completed" />
                    }
                    Complete multiple sets on a workout
                    <Button to="/workouts">Workouts</Button>
                </div>
                <div className="start-list-item">
                    {!hasCompletedWorkouts ?
                        <img src={x} alt="Not Completed" /> :
                        <img src={tickIcon} alt="Completed" />
                    }
                    Complete a workout
                    <Button to="/workouts">Workouts</Button>
                </div>
            </div>
            {hasWorkouts && hasCompletedSets && hasCompletedWorkouts &&
                <Button className="start-hide-button" onClick={hideStartMessage}>Hide this message</Button>
            }
        </div>
    ) : null
)

export default Start

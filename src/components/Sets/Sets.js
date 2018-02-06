import React from 'react'

import Transition from 'components/Transition'
import Button from 'components/Button'

import './style.css'

const Sets = ({children, create, exerciseId, user, isWorkout, toggleRemoveButtons, isRemoveButtonsVisible}) => (
    <div className="sets">
        <div className="sets-header">
            <div className="sets-header-item"><small>Set</small></div>
            <div className="sets-header-item"><small>Reps</small></div>
            <div className="sets-header-item"><small>{user.weightMeasure}</small></div>
            {isWorkout ?
                <div className="sets-header-item sets-header-item--toggle">
                    <Button onClick={toggleRemoveButtons}>{isRemoveButtonsVisible ? '✓' : 'X'}</Button>
                </div> : <div className="sets-header-item"></div>
            }
        </div>
        <Transition className="set">
            {children}
        </Transition>
        <div className="sets-button-create">
            <Button
                onClick={() => create(exerciseId)}
            >
                Add Set
            </Button>
        </div>
    </div>
)

export default Sets

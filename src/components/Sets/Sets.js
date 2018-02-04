import React from 'react'

import Transition from 'components/Transition'
import Button from 'components/Button'

import './style.css'

const Sets = ({children, create, exerciseId, user}) => (
    <div className="sets">
        <div className="sets-header">
            <div className="sets-header-item"><small>Set</small></div>
            <div className="sets-header-item"><small>Reps</small></div>
            <div className="sets-header-item"><small>{user.weightMeasure}</small></div>
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

import React from 'react'

import Transition from 'components/Transition'
import Button from 'components/Button'
import Label from 'components/Form/Label'

import './style.css'

const Sets = ({children, create, exerciseId, user}) => (
    <div className="sets">
        <div className="sets-header">
            <div className="sets-header-item"><Label>Set</Label></div>
            <div className="sets-header-item"><Label>Reps</Label></div>
            <div className="sets-header-item"><Label>{user.weightMeasure}</Label></div>
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

import React from 'react'

import Transition from 'components/Transition'
import Button from 'components/Button'
import Label from 'components/Form/Label'

import './style.css'

const Sets = ({children, create, exerciseId}) => (
    <div className="sets-edit">
        <div className="sets-edit-header">
            <div className="set-header-item"><Label>Set</Label></div>
            <div className="set-header-item"><Label>Reps</Label></div>
            <div className="set-header-item"><Label>Kg</Label></div>
        </div>
        <Transition className="set-edit">
            {children}
        </Transition>
        <div className="sets-edit-button-create">
            <Button
                onClick={() => create(exerciseId)}
            >
                Add Set
            </Button>
        </div>
    </div>
)

export default Sets

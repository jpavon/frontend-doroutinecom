import React from 'react'

import Transition from 'components/Transition'
import Button from 'components/Button'

import './style.css'

const Sets = ({children, create, exerciseId}) => (
    <div className="sets">
        <Transition className="set">
            {children}
        </Transition>
        <div className="sets-button-create">
            <Button
                plus
                transparent
                onClick={() => create(exerciseId)}
            >
                Set
            </Button>
        </div>
    </div>
)

export default Sets

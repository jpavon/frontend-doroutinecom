import React from 'react'

import Transition from 'components/Transition'
import ButtonIcon from 'components/ButtonIcon'

import './style.css'

const Sets = ({children, create, exerciseId}) => (
    <div className="sets">
        <Transition className="set">
            {children}
        </Transition>
        <div className="sets-button-create">
            <ButtonIcon
                plus
                onClick={() => create(exerciseId)}
            >
                &nbsp;Set
            </ButtonIcon>
        </div>
    </div>
)

export default Sets

import React from 'react'

import ButtonIcon from 'components/ButtonIcon'

import './style.css'

const Sets = ({children, createSet, exerciseId}) => (
    <div className="sets">
        {children}
        <div className="sets-button-create">
            <ButtonIcon plus onClick={() => createSet(exerciseId)}>
                &nbsp;Set
            </ButtonIcon>
        </div>
    </div>
)

export default Sets

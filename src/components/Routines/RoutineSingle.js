import React from 'react'

import Form from 'components/Routines/Form'

import './style.css'

const RoutineSingle = ({children, routine, updateRoutine, removeRoutine}) => (
    <div className="routine-single-container">
        <div className="routine-single">
            <Form
                data={routine}
                update={updateRoutine}
            />
        </div>
        {children}
    </div>
)

export default RoutineSingle

import React from 'react'

import Form from 'components/Routines/Form'

import './style.css'

const RoutineSingle = ({children, routine, updateRoutine, removeRoutine}) => (
    <div className="routine-single-container">
        <div className="routine-single">
            <h1 className="global-header">Title</h1>
            <Form
                data={routine}
                update={updateRoutine}
            />
        </div>
        {children}
    </div>
)

export default RoutineSingle

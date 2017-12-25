import React from 'react'

import Form from 'components/Routines/Form'
import Section from 'components/Section'

import './style.css'

const RoutineSingle = ({children, routine, updateRoutine, removeRoutine}) => (
    <div className="routine-single-container">
        <Section title="Routine" className="routine-single">
            <Form
                data={routine}
                update={updateRoutine}
            />
        </Section>
        {children}
    </div>
)

export default RoutineSingle

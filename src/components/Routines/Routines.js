import React from 'react'

import Button from 'components/Button'
import Section from 'components/Section'

import './style.css'

const Routine = ({children, create, isStatusLoading}) => (
    <Section title="Routines" className="routines">
        <div className="routines-button-create">
            <Button onClick={create} disabled={isStatusLoading}>New routine</Button>
        </div>
        {children}
    </Section>
)

export default Routine

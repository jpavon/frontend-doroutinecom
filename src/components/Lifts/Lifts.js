import React from 'react'

import Button from 'components/Button'
import Section from 'components/Section'

import './style.css'

const Lifts = ({children, create}) => (
    <Section title="Lifts" className="lifts-container">
        <div className="lifts">
            {children}
        </div>
        <div className="lifts-button-create">
            <Button
                onClick={create}
            >
                New lift
            </Button>
        </div>
    </Section>
)

export default Lifts

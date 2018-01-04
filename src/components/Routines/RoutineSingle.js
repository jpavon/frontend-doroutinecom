import React from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Label from 'components/Form/Label'
import Section from 'components/Section'
import Button from 'components/Button'

import './style.css'

const RoutineSingle = ({children, routine, update, remove}) => (
    <div className="routine-single-container">
        <Section title="Routine" className="routine-single">
            <AutoSaveForm
                initialValues={routine}
                update={update}
                render={({values}) => (
                    <div className="routine-single-title">
                        <Label htmlFor={`name${values.id}`}>Title</Label>
                        <Input
                            id={`name${values.id}`}
                            name="name"
                            placeholder="Title..."
                            size="large"
                        />
                    </div>
                )}
            />
        </Section>
        {children}
        <div className="routine-single-button-remove">
            <Button danger onClick={remove}>Delete routine</Button>
        </div>
    </div>
)

export default RoutineSingle

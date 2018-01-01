import React, { Fragment } from 'react'

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
        <Button danger onClick={remove}>Remove routine</Button>
    </div>
)

export default RoutineSingle

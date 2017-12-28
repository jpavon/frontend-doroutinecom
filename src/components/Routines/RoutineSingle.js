import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Label from 'components/Form/Label'
import Section from 'components/Section'

import './style.css'

const RoutineSingle = ({children, routine, updateRoutine, removeRoutine}) => (
    <div className="routine-single-container">
        <Section title="Routine" className="routine-single">
            <AutoSaveForm
                initialValues={routine}
                update={updateRoutine}
                render={({values}) => (
                    <Fragment>
                        <Label htmlFor={`name${values.id}`}>Title</Label>
                        <Input
                            id={`name${values.id}`}
                            name="name"
                            placeholder="Title..."
                            size="large"
                        />
                    </Fragment>
                )}
            />
        </Section>
        {children}
    </div>
)

export default RoutineSingle

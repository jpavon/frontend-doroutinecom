import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Select from 'components/AutoSaveForm/Select'
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
                    <Fragment>
                        <div className="routine-weight-measure">
                            Weight Measure:
                            <Select
                                name="weightMeasure"
                                options={[
                                    {id: 'kg', name: 'kg'},
                                    {id: 'lbs', name: 'lbs'},
                                ]}
                            />
                        </div>
                        <div className="routine-single-title">
                            <Label htmlFor={`name${values.id}`}>Title</Label>
                            <Input
                                id={`name${values.id}`}
                                name="name"
                                size="large"
                            />
                        </div>
                    </Fragment>
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

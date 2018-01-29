import React, { Fragment } from 'react'

import AutoSaveForm from 'components/AutoSaveForm'
import FieldGroup from 'components/AutoSaveForm/FieldGroup'
import TopNav from 'components/TopNav'

import './style.css'

const Routine = ({children, routine, update}) => (
    <Fragment>
        <TopNav
            title="Routine"
            left={{
                to: "/routines"
            }}
        />
        <div className="routine-single">
            <div className="routine-single-form">
                <AutoSaveForm
                    initialValues={routine}
                    update={update}
                    render={({values}) => (
                        <FieldGroup
                            label="Name"
                            id={`name${values.id}`}
                            name="name"
                            placeholder="Type your routine name"
                        />
                    )}
                />
            </div>
            {children}
        </div>
    </Fragment>
)

export default Routine

import * as React from 'react'

import { IFormatedRoutine, IRoutineActionArgs } from 'data/routines/types'

import AutoSaveForm, { IAutoSaveFormState } from 'components/AutoSaveForm'
import Field from 'components/Field'

import './style.css'

interface IRoutineProps {
    routine: IFormatedRoutine
    update: IRoutineActionArgs['put']
}

const Routine: React.SFC<IRoutineProps> = ({children, routine, update}) => (
    <div className="routine">
        <div className="routine-form">
            <AutoSaveForm
                initialValues={routine}
                update={update}
                render={({values}: IAutoSaveFormState) => (
                    <Field
                        label="Name"
                        id={`name${values.id}`}
                        name="name"
                        placeholder="Type your routine name"
                    />
                )}
            />
        </div>
        {children}
        <div className="routine-form">
            <AutoSaveForm
                initialValues={routine}
                update={update}
                render={({values}: IAutoSaveFormState) => (
                    <Field
                        component="textarea"
                        label="Additional Notes"
                        id={`notes${values.id}`}
                        name="notes"
                        placeholder="Type any extra exercises or annotations"
                    />
                )}
            />
        </div>
    </div>
)

export default Routine

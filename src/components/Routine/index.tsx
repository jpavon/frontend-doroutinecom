import * as React from 'react'

import { IRoutine } from 'data/routines/types'
import { putRoutine } from 'data/routines/actions'

import AutoSaveForm, { IAutoSaveFormState } from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Textarea from 'components/AutoSaveForm/Textarea'
import Field from 'components/Field'

import './style.scss'

interface IRoutineProps {
    routine: IRoutine
    update: typeof putRoutine
}

const Routine: React.SFC<IRoutineProps> = ({ children, routine, update }) => (
    <div className="routine">
        <div className="routine-form">
            <AutoSaveForm
                initialValues={routine}
                update={update}
                render={({ values }: IAutoSaveFormState) => (
                    <Field label="Name" id={`name${values.id}`}>
                        <Input
                            id={`name${values.id}`}
                            name="name"
                            placeholder="Type your routine name"
                        />
                    </Field>
                )}
            />
        </div>
        {children}
        <div className="routine-form">
            <AutoSaveForm
                initialValues={routine}
                update={update}
                render={({ values }: IAutoSaveFormState) => (
                    <Field label="Additional Notes" id={`notes${values.id}`}>
                        <Textarea
                            id={`notes${values.id}`}
                            name="notes"
                            placeholder="Type any extra exercises or annotations"
                        />
                    </Field>
                )}
            />
        </div>
    </div>
)

export default Routine

import * as React from 'react'

import { IRoutine } from 'data/routines/types'
import { putRoutine } from 'data/routines/actions'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Textarea from 'components/AutoSaveForm/Textarea'
import Field from 'components/Field'

import './style.scss'

interface IRoutineProps {
    routine: IRoutine
    update: typeof putRoutine
}

const Routine: React.SFC<IRoutineProps> = (props) => (
    <div className="routine">
        <div className="routine-form">
            <AutoSaveForm
                initialValues={props.routine}
                update={props.update}
                render={({ values }) => (
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
        {props.children}
        <div className="routine-form">
            <AutoSaveForm
                initialValues={props.routine}
                update={props.update}
                render={({ values }) => (
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

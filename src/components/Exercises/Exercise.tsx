import * as React from 'react'

import { IExercise } from 'data/exercises/types'
import { ILift } from 'data/lifts/types'
import { putExercise, deleteExercise } from 'data/exercises/actions'

import AutoSaveForm from 'components/AutoSaveForm'
import Button from 'components/Button'
import Select from 'components/AutoSaveForm/Select'

interface IProps {
    exercise: IExercise
    lifts: ILift[]
    update: typeof putExercise
    remove: typeof deleteExercise
    isDeleting: boolean
    isRemoveButtonsVisible: boolean
}

const Exercise: React.SFC<IProps> = (props) => (
    <>
        <AutoSaveForm
            update={props.update}
            initialValues={props.exercise}
            render={({ values }) => (
                <div className="exercise-lift">
                    <Select
                        id="liftId"
                        name="liftId"
                        options={props.lifts}
                        defaultOptionMessage="Select a lift"
                        noOptionsMessage="No lift created."
                    />
                    {values.liftId ? (
                        <Button to={`/lifts/${values.liftId}`}>Info</Button>
                    ) : (
                        <Button to="/lifts">Create</Button>
                    )}
                </div>
            )}
        />
        {props.children}
        {props.isRemoveButtonsVisible && (
            <div className="exercise-button-delete">
                <Button
                    removeIcon={true}
                    danger={true}
                    onClick={() => props.remove(props.exercise.id)}
                    disabled={props.isDeleting}
                    title="Delete Exercise"
                />
            </div>
        )}
    </>
)

export default Exercise

import * as React from 'react'

import { IFormatedExercise } from 'data/exercises/types'
import { IFormatedLift } from 'data/lifts/types'
import { putExercise, deleteExercise } from 'data/exercises/actions'

import AutoSaveForm, { IAutoSaveFormState } from 'components/AutoSaveForm'
import Button from 'components/Button'
import Select from 'components/AutoSaveForm/Select'

interface IProps {
    exercise: IFormatedExercise
    lifts: IFormatedLift[]
    update: typeof putExercise
    remove: typeof deleteExercise
    isDeleting: boolean
    isRemoveButtonsVisible: boolean
}

const Exercise: React.SFC<IProps> = ({
    children,
    exercise,
    lifts,
    update,
    remove,
    isDeleting,
    isRemoveButtonsVisible
}) => (
    <>
        <AutoSaveForm
            update={update}
            initialValues={exercise}
            render={({ values }: IAutoSaveFormState) => (
                <div className="exercise-lift">
                    <Select
                        id="liftId"
                        name="liftId"
                        options={lifts}
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
        {children}
        {isRemoveButtonsVisible && (
            <div className="exercise-button-delete">
                <Button
                    remove={true}
                    danger={true}
                    onClick={() => remove(exercise.id)}
                    disabled={isDeleting}
                    title="Delete Exercise"
                />
            </div>
        )}
    </>
)

export default Exercise

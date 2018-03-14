import * as React from 'react'

import { IFormatedExercise, IExerciseActionArgs } from 'data/exercises/types'
import { IFormatedLift } from 'data/lifts/types'

import AutoSaveForm from 'components/AutoSaveForm'
import Button from 'components/Button'
import Select from 'components/AutoSaveForm/Select'

interface IProps {
    exercise: IFormatedExercise
    lifts: IFormatedLift[]
    update: IExerciseActionArgs['put']
    remove: IExerciseActionArgs['delete']
    isDeleting: boolean
    isRemoveButtonsVisible: boolean
}

interface IForm {
    values: IFormatedExercise
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
            render={({values}: IForm) => (
                <div className="exercise-lift">
                    <Select
                        label="Lift"
                        id="liftId"
                        name="liftId"
                        options={lifts}
                        defaultOptionMessage="Select a lift"
                        noOptionsMessage="No lift created."
                    />
                    {values.liftId ?
                        <Button to={`/lifts/${values.liftId}`}>Info</Button> :
                        <Button to="/lifts">Create</Button>
                    }
                </div>
            )}
        />
        {children}
        {isRemoveButtonsVisible &&
            <div className="exercise-button-remove">
                <Button
                    remove
                    danger
                    onClick={() => remove(exercise.id)}
                    disabled={isDeleting}
                />
            </div>
        }
    </>
)

export default Exercise

import * as React from 'react'
import * as classNames from 'classnames'

import { ISet } from 'data/sets/types'
import { putSet, deleteSet } from 'data/sets/actions'

import AutoSaveForm, { IAutoSaveFormState } from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Button from 'components/Button'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Label from 'components/Form/Label'

interface ISetProps {
    index: number
    set: ISet
    update: typeof putSet
    remove: typeof deleteSet
    isDeleting: boolean
    isRemoveButtonsVisible: boolean
    previousSet: ISet | null
}

const Set: React.SFC<ISetProps> = ({
    index,
    set,
    update,
    remove,
    isDeleting,
    isRemoveButtonsVisible,
    previousSet
}) => (
    <AutoSaveForm
        initialValues={set}
        update={update}
        render={({ values }: IAutoSaveFormState) => (
            <div
                className={classNames(
                    'set-inner',
                    values.isCompleted && 'set-inner--is-completed'
                )}
            >
                <div className="set-inner-item">
                    <small>#{index + 1}</small>
                </div>
                <div className="set-inner-item">
                    <Input
                        id="reps"
                        type="number"
                        name="reps"
                        placeholder={
                            previousSet && previousSet.reps
                                ? '' + previousSet.reps
                                : 'Reps'
                        }
                    />
                </div>
                <div className="set-inner-item">
                    <Input
                        id="weight"
                        type="number"
                        name="weight"
                        placeholder={
                            previousSet && previousSet.weight
                                ? '' + previousSet.weight
                                : 'Weight'
                        }
                    />
                </div>
                <div className="set-inner-item set-action">
                    {!isRemoveButtonsVisible && (
                        <Label
                            htmlFor={`set-checkbox${values.id}`}
                            title="Mark as Completed"
                        >
                            <Checkbox
                                id={`set-checkbox${values.id}`}
                                name="isCompleted"
                            />
                        </Label>
                    )}
                    {isRemoveButtonsVisible && (
                        <Button
                            remove={true}
                            danger={true}
                            onClick={() => remove(set.id)}
                            disabled={isDeleting}
                            className="set-button-delete"
                            title="Delete Set"
                        />
                    )}
                </div>
            </div>
        )}
    />
)

export default Set

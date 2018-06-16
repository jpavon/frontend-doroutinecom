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

const Set: React.SFC<ISetProps> = (props) => (
    <AutoSaveForm
        initialValues={props.set}
        update={props.update}
        render={({ values }: IAutoSaveFormState) => (
            <div
                className={classNames(
                    'set-inner',
                    values.isCompleted && 'set-inner--is-completed'
                )}
            >
                <div className="set-inner-item">
                    <small>#{props.index + 1}</small>
                </div>
                <div className="set-inner-item" data-e2e="reps">
                    <Input
                        id="reps"
                        type="number"
                        name="reps"
                        placeholder={
                            props.previousSet && props.previousSet.reps
                                ? '' + props.previousSet.reps
                                : 'Reps'
                        }
                    />
                </div>
                <div className="set-inner-item" data-e2e="weight">
                    <Input
                        id="weight"
                        type="number"
                        name="weight"
                        placeholder={
                            props.previousSet && props.previousSet.weight
                                ? '' + props.previousSet.weight
                                : 'Weight'
                        }
                    />
                </div>
                <div className="set-inner-item set-action">
                    {!props.isRemoveButtonsVisible && (
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
                    {props.isRemoveButtonsVisible && (
                        <Button
                            removeIcon={true}
                            danger={true}
                            onClick={() => props.remove(props.set.id)}
                            disabled={props.isDeleting}
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

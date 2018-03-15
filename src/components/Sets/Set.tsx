import * as React from 'react'
import * as classNames from 'classnames'

import { IFormatedSet, ISetActionArgs } from 'data/sets/types'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Button from 'components/Button'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Label from 'components/Form/Label'

interface ISetProps {
    index: number
    set: IFormatedSet
    update: ISetActionArgs['put']
    remove: ISetActionArgs['delete']
    isDeleting: boolean
    isRemoveButtonsVisible: boolean
    previousSet: IFormatedSet | null
}

interface IForm {
    values: IFormatedSet
}

const Set: React.SFC<ISetProps> = ({index, set, update, remove, isDeleting, isRemoveButtonsVisible, previousSet}) => (
    <AutoSaveForm
        initialValues={set}
        update={update}
        render={({values}: IForm) => (
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
                        type="number"
                        name="reps"
                        placeholder={(previousSet && previousSet.reps) ? previousSet.reps : 'Reps'}
                    />
                </div>
                <div className="set-inner-item">
                    <Input
                        type="number"
                        name="weight"
                        placeholder={(previousSet && previousSet.weight) ? previousSet.weight : 'Weight'}
                    />
                </div>
                <div className="set-inner-item set-action">
                    {!isRemoveButtonsVisible &&
                        <Label
                            htmlFor={`set-checkbox${values.id}`}
                        >
                            <Checkbox
                                id={`set-checkbox${values.id}`}
                                name="isCompleted"
                            />
                        </Label>
                    }
                    {isRemoveButtonsVisible &&
                        <Button
                            remove
                            danger
                            onClick={() => remove(set.id)}
                            disabled={isDeleting}
                            className="set-button-remove"
                        />
                    }
                </div>
            </div>
        )}
    />
)

export default Set

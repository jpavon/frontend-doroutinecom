import React, { Fragment } from 'react'
import classNames from 'classnames'

import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import InputWithItem from 'components/Form/InputWithItem'
import Button from 'components/Button'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Label from 'components/Form/Label'

const Set = ({i, set, routine, update, remove, isDeleting}) => (
    <Fragment>
        <AutoSaveForm
            initialValues={set}
            update={update}
            render={({values}) => (
                <div
                    className={classNames(
                        'set-inner',
                        values.isCompleted && 'set-inner--is-completed'
                    )}
                >
                    <div className="set-inner-item">
                        <Label># {i + 1}</Label>
                    </div>
                    <div className="set-inner-item">
                        <Input
                            name="reps"
                            placeholder="Set reps"
                        />
                    </div>
                    <div className="set-inner-item">
                        <Input
                            type="number"
                            name="weight"
                            placeholder="Set weight"
                        />
                    </div>
                    <div className="set-inner-item set-button-remove">
                        {/*<Checkbox
                            name="isCompleted"
                        />*/}
                        <Button
                            danger
                            onClick={() => remove(set.id)}
                            disabled={isDeleting}
                        >
                            Remove
                        </Button>
                    </div>
                </div>
            )}
        />
    </Fragment>
)

export default Set

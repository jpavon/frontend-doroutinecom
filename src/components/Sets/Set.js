import React, { Fragment } from 'react'
import classNames from 'classnames'

import AutoSaveForm from 'components/AutoSaveForm'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Label from 'components/Form/Label'

const Set = ({i, set, routine, update}) => (
    <AutoSaveForm
        initialValues={set}
        update={update}
        render={({values}) => (
            <div
                className={classNames(
                    'set',
                    values.isCompleted && 'set--is-completed'
                )}
            >
                <div className="set-item">
                    <Label>#{i + 1}</Label>
                </div>
                <div className="set-item set-previous">
                    <Label>200kgx12</Label>
                </div>
                <div className="set-item">
                    {set.reps}
                </div>
                <div className="set-item">
                    {set.weight}
                </div>
                <div className="set-item set-checkbox">
                    <Label htmlFor={`set-checkbox${values.id}`}>
                        <Checkbox
                            id={`set-checkbox${values.id}`}
                            name="isCompleted"
                        />
                    </Label>
                </div>
            </div>
        )}
    />
)

export default Set

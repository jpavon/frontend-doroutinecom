import React, { Fragment } from 'react'
import classNames from 'classnames'

import withForm from 'components/withForm'
import Input from 'components/withForm/Input'
import Checkbox from 'components/withForm/Checkbox'
import Label from 'components/Form/Label'

const Form = ({data, hocState}) => (
    <Fragment>
        <Label htmlFor={`workout${data.id}`}>Completed</Label>
        <Checkbox
            id={`workout${data.id}`}
            name="isDone"
        />
        <div className={classNames(
            'workout-name',
            hocState.data.isDone && 'workout-name--is-done'
        )}>
            <Input
                name="name"
                placeholder="Name..."
                background="dark"
            />
        </div>
    </Fragment>
)

export default withForm(Form)

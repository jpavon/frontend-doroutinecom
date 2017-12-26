import React, { Fragment } from 'react'
import classNames from 'classnames'

import withForm from 'components/withForm'
import Input from 'components/withForm/Input'
import Checkbox from 'components/withForm/Checkbox'

const Form = ({hocState}) => (
    <Fragment>
        <div className={classNames(
            'workout-name',
            hocState.data.isDone && 'workout-name--is-done'
        )}>
            <Input
                name="name"
                placeholder="Name..."
                background="dark"
            />

            <Checkbox
                name="isDone"
            />
        </div>
    </Fragment>
)

export default withForm(Form)

import React, { Fragment } from 'react'
import classNames from 'classnames'

import withForm from 'components/Form/withForm'
import Input from 'components/Form/Input'
import Checkbox from 'components/Form/Checkbox'

const Form = ({hocState}) => (
    <Fragment>
        <div className={classNames(
            'workout-name',
            hocState.data.isDone && 'workout-name--is-done'
        )}>
            <Input
                name="name"
                placeholder="Name..."
                align="center"
                background="dark"
            />

            <Checkbox
                name="isDone"
            />
        </div>
    </Fragment>
)

export default withForm(Form)
